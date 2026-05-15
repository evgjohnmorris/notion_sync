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

async function ledgerSync(notionClient, databaseId, csvData) {
    // Basic CSV parser (split by newlines and commas)
    // Assumes columns: Date, Description, Amount
    const rows = csvData.trim().split('\n').map(row => row.split(','));
    const headers = rows.shift(); // Remove headers

    let createdCount = 0;

    for (const row of rows) {
        if (row.length < 3) continue;

        const date = row[0].trim();
        const description = row[1].trim();
        const amount = parseFloat(row[2].trim());

        // Create page in Notion database
        await notionClient.pages.create({
            parent: { database_id: databaseId },
            properties: {
                "Date": {
                    date: { start: date }
                },
                "Name": {
                    title: [
                        { text: { content: description } }
                    ]
                },
                "Amount": {
                    number: amount
                }
            }
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
