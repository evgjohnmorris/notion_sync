const { NotionToolFactory } = require('./src/factory');

async function testEnhancements() {
    const factory = new NotionToolFactory();
    const tools = factory.generate();

    console.log('\n--- Testing Fuzzy Match ---');
    const fuzzyTool = tools.get('notion_databases_fuzzy_match_00000');
    // Using null for notionClient to trigger the Mock fallback in fuzzy-match.js
    const fuzzyResult = await fuzzyTool.handler(null, { query: 'Q3 Marketing Tracker' });
    console.log('Fuzzy Tool Execution Result:', fuzzyResult);

    console.log('\n--- Testing SQL Query ---');
    const sqlTool = tools.get('notion_databases_sql_query_00001');
    const sqlResult = await sqlTool.handler(null, { query: "SELECT * FROM Tasks WHERE Priority = 'High' AND Status != 'Done'" });
    console.log('SQL Tool Execution Result:', JSON.stringify(sqlResult, null, 2));

    console.log('\n--- Testing Logistics Domain Tool ---');
    // We added 5 new domains at the end. 'Logistics' is the 16th domain (index 15).
    // Let's find a logistics tool dynamically.
    const logisticsToolName = Array.from(tools.keys()).find(k => k.startsWith('notion_logistics_smart_update'));
    if (logisticsToolName) {
        const logisticsTool = tools.get(logisticsToolName);
        const logisticsResult = await logisticsTool.handler(null, { 
            cargo_id: 'CGO-9821', 
            destination: 'Port of Los Angeles',
            status: 'In Transit'
        });
        console.log('Logistics Tool Execution Result:', JSON.stringify(logisticsResult, null, 2));
    }

    console.log('\n--- Testing Taxes Domain Tool ---');
    const taxesToolName = Array.from(tools.keys()).find(k => k.startsWith('notion_taxes_smart_create'));
    if (taxesToolName) {
        const taxesTool = tools.get(taxesToolName);
        const taxesResult = await taxesTool.handler(null, { 
            company_id: 'Acme Corp', 
            quarter: 'Q4-2026',
            revenue_estimate: 12500000
        });
        console.log('Taxes Tool Execution Result:', JSON.stringify(taxesResult, null, 2));
    }

    console.log('\n--- Testing ISO_Standards Domain Tool ---');
    const isoToolName = Array.from(tools.keys()).find(k => k.startsWith('notion_iso_standards_smart_update'));
    if (isoToolName) {
        const isoTool = tools.get(isoToolName);
        const isoResult = await isoTool.handler(null, { 
            standard: 'ISO 9001:2015', 
            department: 'Quality Assurance',
            auditor_id: 'AUD-EXT-099'
        });
        console.log('ISO Standards Tool Execution Result:', JSON.stringify(isoResult, null, 2));
    }
}

testEnhancements();
