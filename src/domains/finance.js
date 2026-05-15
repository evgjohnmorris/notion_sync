const { queryWithSQL, fuzzyQuery } = require('./databases');

async function currencyConverter(notionClient, databaseId, sourceProp, targetProp, exchangeRate) {
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

async function ledgerSync(notionClient, databaseId, csvData, columnMapping = null) {
    // Basic CSV parser (split by newlines and commas)
    const rows = csvData.trim().split('\n').map(row => row.split(','));
    const headers = rows.shift().map(h => h.trim()); // Remove and clean headers

    let createdCount = 0;

    for (const row of rows) {
        if (row.length === 0 || row[0].trim() === '') continue; // Skip empty rows

        const properties = {};

        if (columnMapping) {
            // Dynamic Mapping
            for (const [notionProp, config] of Object.entries(columnMapping)) {
                const headerIndex = headers.indexOf(config.csvHeader);
                if (headerIndex !== -1 && headerIndex < row.length) {
                    const value = row[headerIndex].trim();
                    
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
            properties["Date"] = { date: { start: row[0].trim() } };
            properties["Name"] = { title: [{ text: { content: row[1].trim() } }] };
            properties["Amount"] = { number: parseFloat(row[2].trim()) };
        }

        // Create page in Notion database
        await notionClient.pages.create({
            parent: { database_id: databaseId },
            properties: properties
        });
        createdCount++;
    }

    return {
        success: true,
        rows_synced: createdCount
    };
}

module.exports = {
    currencyConverter,
    ledgerSync
};
