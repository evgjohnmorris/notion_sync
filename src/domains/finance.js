const { queryWithSQL, fuzzyQuery } = require('./databases');
const crypto = require('crypto');
const visualization = require('./visualization');

async function currencyConverter(notionClient, databaseId, sourceProp, targetProp, targetCurrency = 'EUR', baseCurrency = 'USD') {
    let exchangeRate = 1.0;
    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        if (data.rates && data.rates[targetCurrency]) {
            exchangeRate = data.rates[targetCurrency];
        } else {
            throw new Error(`Target currency ${targetCurrency} not found in rates.`);
        }
    } catch (e) {
        console.warn(`Failed to fetch live exchange rate for ${baseCurrency} to ${targetCurrency}: ${e.message}. Using fallback rate 1.0.`);
    }

    const results = await notionClient.databases.query({ database_id: databaseId });
    let updatedCount = 0;

    for (const page of results.results) {
        let sourceValue = 0;
        
        // Handle number property types
        if (page.properties[sourceProp] && page.properties[sourceProp].type === 'number') {
            sourceValue = page.properties[sourceProp].number || 0;
        } else if (page.properties[sourceProp] && page.properties[sourceProp].type === 'formula') {
            sourceValue = page.properties[sourceProp].formula.number || 0;
        } else {
            // Skip pages without the property or with wrong type
            continue;
        }

        const newTargetValue = sourceValue * exchangeRate;

        // Prepare property update payload
        const properties = {};
        properties[targetProp] = { number: newTargetValue };

        await notionClient.pages.update({
            page_id: page.id,
            properties: properties
        });

        updatedCount++;
    }

    return {
        success: true,
        pages_updated: updatedCount,
        exchange_rate_applied: exchangeRate
    };
}

async function ledgerSync(notionClient, databaseId, csvData, columnMapping = null, generateChart = false) {
    // Basic CSV parser (split by newlines and commas)
    const rows = csvData.trim().split('\n').map(row => row.split(','));
    const headers = rows.shift().map(h => h.trim()); // Remove and clean headers

    let createdCount = 0;
    let skippedCount = 0;
    let categoryTotals = {};

    // Build a set of existing row hashes
    const existingHashes = new Set();
    let hasMore = true;
    let nextCursor = undefined;

    while (hasMore) {
        const queryResult = await notionClient.databases.query({
            database_id: databaseId,
            start_cursor: nextCursor
        });

        for (const page of queryResult.results) {
            let rowString = '';
            
            // Reconstruct a comparable string from Notion properties
            if (columnMapping) {
                for (const [notionProp, config] of Object.entries(columnMapping)) {
                   const prop = page.properties[notionProp];
                   if (!prop) continue;
                   if (config.type === 'date' && prop.date) rowString += prop.date.start;
                   else if (config.type === 'title' && prop.title && prop.title.length > 0) rowString += prop.title[0].plain_text || prop.title[0].text.content;
                   else if (config.type === 'number' && typeof prop.number === 'number') rowString += prop.number;
                   else if (prop.rich_text && prop.rich_text.length > 0) rowString += prop.rich_text[0].plain_text || prop.rich_text[0].text.content;
                   rowString += '|';
                }
            } else {
                const dateProp = page.properties["Date"];
                const nameProp = page.properties["Name"];
                const amountProp = page.properties["Amount"];
                
                if (dateProp && dateProp.date) rowString += dateProp.date.start + '|';
                if (nameProp && nameProp.title && nameProp.title.length > 0) rowString += (nameProp.title[0].plain_text || nameProp.title[0].text.content) + '|';
                if (amountProp && typeof amountProp.number === 'number') rowString += amountProp.number + '|';
            }
            
            const hash = crypto.createHash('sha256').update(rowString).digest('hex');
            existingHashes.add(hash);
        }
        
        hasMore = queryResult.has_more;
        nextCursor = queryResult.next_cursor;
    }

    for (const row of rows) {
        if (row.length === 0 || row[0].trim() === '') continue; // Skip empty rows

        const properties = {};
        let rowStringForHash = '';

        if (columnMapping) {
            // Dynamic Mapping
            for (const [notionProp, config] of Object.entries(columnMapping)) {
                const headerIndex = headers.indexOf(config.csvHeader);
                if (headerIndex !== -1 && headerIndex < row.length) {
                    const value = row[headerIndex].trim();
                    rowStringForHash += value + '|';
                    
                    if (config.type === 'date') {
                        properties[notionProp] = { date: { start: value } };
                    } else if (config.type === 'title') {
                        properties[notionProp] = { title: [{ text: { content: value } }] };
                    } else if (config.type === 'number') {
                        properties[notionProp] = { number: parseFloat(value) };
                    } else {
                        // Default to rich_text
                        properties[notionProp] = { rich_text: [{ text: { content: value } }] };
                    }
                }
            }
        } else {
            // Legacy hardcoded mapping
            if (row.length < 3) continue;
            const d = row[0].trim();
            const n = row[1].trim();
            const a = row[2].trim();
            rowStringForHash = `${d}|${n}|${parseFloat(a)}|`;
            properties["Date"] = { date: { start: d } };
            properties["Name"] = { title: [{ text: { content: n } }] };
            properties["Amount"] = { number: parseFloat(a) };
        }
        
        const rowHash = crypto.createHash('sha256').update(rowStringForHash).digest('hex');
        if (existingHashes.has(rowHash)) {
            skippedCount++;
            continue;
        }

        // Aggregate for chart
        if (generateChart) {
            let currentAmount = 0;
            let currentCategory = 'Uncategorized';
            if (columnMapping) {
                for (const [notionProp, config] of Object.entries(columnMapping)) {
                    const headerIndex = headers.indexOf(config.csvHeader);
                    if (headerIndex !== -1 && headerIndex < row.length) {
                        const value = row[headerIndex].trim();
                        if (config.type === 'number') currentAmount = parseFloat(value);
                        if (config.csvHeader.toLowerCase() === 'category' || notionProp.toLowerCase() === 'tag') {
                            currentCategory = value || 'Uncategorized';
                        }
                    }
                }
            } else {
                currentAmount = parseFloat(row[2].trim());
            }
            if (!isNaN(currentAmount)) {
                categoryTotals[currentCategory] = (categoryTotals[currentCategory] || 0) + currentAmount;
            }
        }

        // Create page in Notion database
        await notionClient.pages.create({
            parent: { database_id: databaseId },
            properties: properties
        });
        existingHashes.add(rowHash); // add to avoid dupes within the same CSV
        createdCount++;
    }

    let chart_url = null;
    if (generateChart && Object.keys(categoryTotals).length > 0) {
        const labels = Object.keys(categoryTotals);
        const data = Object.values(categoryTotals);
        const datasets = [{ label: 'Spending by Category', data: data }];
        const chartBlock = await visualization.generateChartBlock('bar', labels, datasets, 'Ledger Summary');
        if (chartBlock && chartBlock.image && chartBlock.image.external) {
            chart_url = chartBlock.image.external.url;
        }
    }

    return {
        success: true,
        rows_synced: createdCount,
        rows_skipped: skippedCount,
        chart_url: chart_url
    };
}

module.exports = {
    currencyConverter,
    ledgerSync
};
