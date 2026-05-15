const notionSync = require('../src/index');

async function runTests() {
    console.log('🧪 Starting Lab Test for Semantic Notion Sync API...');
    
    try {
        console.log('\n--- Running Sanity Checks ---');

        // Check if domains exist
        if (!notionSync.databases || !notionSync.pages || !notionSync.industry || !notionSync.blocks) {
            throw new Error('API is missing core domains!');
        }
        console.log('✅ Core domains are exported.');

        const mockNotionClient = {
            pages: {
                create: async (payload) => ({ id: 'mock-page-id', ...payload }),
                update: async (payload) => payload
            },
            databases: {
                query: async (payload) => payload
            },
            blocks: {
                children: {
                    append: async (payload) => payload
                },
                retrieve: async (payload) => payload,
                update: async (payload) => payload,
                delete: async (payload) => payload
            },
            search: async () => ({ results: [{ id: 'mocked-uuid-1234' }] })
        };

        // Check industry macros
        if (typeof notionSync.industry.taxes.smartCreate !== 'function') {
            throw new Error('Industry macro smartCreate not found!');
        }

        const taxesResult = await notionSync.industry.taxes.smartCreate(mockNotionClient, { company_id: 'TestCorp', revenue_estimate: 10000 });
        if (!taxesResult.macro_executed) {
            throw new Error('Taxes macro failed to execute.');
        }
        console.log('✅ Industry macros (Taxes) executed successfully.');

        // Check pages fuzzy creation
        if (typeof notionSync.pages.createFuzzy !== 'function') {
            throw new Error('pages.createFuzzy is missing!');
        }
        // Test fuzzy mock
        const fuzzyResult = await notionSync.pages.createFuzzy(mockNotionClient, 'Test Database');
        console.log('✅ Fuzzy matching for pages executed successfully (Mock).');

        // Check markdown to blocks parser
        if (typeof notionSync.blocks.appendMarkdown !== 'function') {
            throw new Error('blocks.appendMarkdown is missing!');
        }
        const markdownInput = "# Title\n- Item 1\nSome paragraph";
        const appendResult = await notionSync.blocks.appendMarkdown(mockNotionClient, 'block-123', markdownInput);
        if (!appendResult.children || appendResult.children.length !== 3) {
            throw new Error('Markdown parser failed to generate correct number of blocks.');
        }
        if (appendResult.children[0].type !== 'heading_1' || appendResult.children[1].type !== 'bulleted_list_item' || appendResult.children[2].type !== 'paragraph') {
            throw new Error('Markdown parser generated incorrect block types.');
        }
        console.log('✅ Markdown-to-Blocks parser executed successfully.');

        // Check finance tools
        if (typeof notionSync.finance.currencyConverter !== 'function' || typeof notionSync.finance.ledgerSync !== 'function') {
            throw new Error('Finance tools are missing!');
        }

        // Mock databases.query to return dummy data for currency converter
        mockNotionClient.databases.query = async () => ({
            results: [
                { id: 'page-1', properties: { 'USD': { type: 'number', number: 100 } } },
                { id: 'page-2', properties: { 'USD': { type: 'number', number: 250 } } }
            ]
        });

        const currencyResult = await notionSync.finance.currencyConverter(mockNotionClient, 'db-123', 'USD', 'EUR', 'EUR', 'USD');
        if (currencyResult.pages_updated !== 2) {
            throw new Error('currencyConverter failed to update all pages.');
        }
        console.log('✅ currencyConverter executed successfully.');

        const csvData = "Date,Description,Amount\n2023-10-01,Office Supplies,45.50\n2023-10-02,Software Subscription,99.00";
        const ledgerResult = await notionSync.finance.ledgerSync(mockNotionClient, 'db-456', csvData);
        if (ledgerResult.rows_synced !== 2) {
            throw new Error('ledgerSync (legacy) failed to sync all rows.');
        }

        const dynamicCsvData = "Tx Date,Memo,Value,Category\n2023-10-03,Lunch,15.00,Meals";
        const columnMapping = {
            "Transaction Date": { csvHeader: "Tx Date", type: "date" },
            "Transaction Name": { csvHeader: "Memo", type: "title" },
            "Cost": { csvHeader: "Value", type: "number" },
            "Tag": { csvHeader: "Category", type: "rich_text" }
        };
        const dynamicLedgerResult = await notionSync.finance.ledgerSync(mockNotionClient, 'db-789', dynamicCsvData, columnMapping);
        if (dynamicLedgerResult.rows_synced !== 1) {
            throw new Error('ledgerSync (dynamic) failed to sync row.');
        }

        // Test Idempotency
        mockNotionClient.databases.query = async () => ({
            results: [
                { 
                    id: 'page-1', 
                    properties: { 
                        'Date': { date: { start: '2023-10-01' } },
                        'Name': { title: [{ plain_text: 'Office Supplies' }] },
                        'Amount': { number: 45.50 }
                    } 
                }
            ],
            has_more: false
        });
        
        const duplicateCsvData = "Date,Description,Amount\n2023-10-01,Office Supplies,45.50\n2023-10-02,Software Subscription,99.00";
        const duplicateResult = await notionSync.finance.ledgerSync(mockNotionClient, 'db-dup', duplicateCsvData);
        if (duplicateResult.rows_synced !== 1 || duplicateResult.rows_skipped !== 1) {
            throw new Error('ledgerSync (idempotency) failed to skip duplicate row.');
        }

        console.log('✅ ledgerSync executed successfully.');

        // Check strategy tools
        if (
            typeof notionSync.strategy.generateSWOT !== 'function' || 
            typeof notionSync.strategy.generatePESTEL !== 'function' ||
            typeof notionSync.strategy.generateOKR !== 'function' ||
            typeof notionSync.strategy.generateLeanCanvas !== 'function' ||
            typeof notionSync.strategy.generatePorterFiveForces !== 'function'
        ) {
            throw new Error('Strategy tools are missing!');
        }

        const swotResult = await notionSync.strategy.generateSWOT(mockNotionClient, 'db-strategy', 'TechNova');
        if (!swotResult || !swotResult.id) {
            throw new Error('generateSWOT failed to return a valid page payload.');
        }
        console.log('✅ generateSWOT executed successfully.');

        const pestelResult = await notionSync.strategy.generatePESTEL(mockNotionClient, 'db-strategy', 'TechNova');
        if (!pestelResult || !pestelResult.id) {
            throw new Error('generatePESTEL failed to return a valid page payload.');
        }
        console.log('✅ generatePESTEL executed successfully.');

        const okrResult = await notionSync.strategy.generateOKR(mockNotionClient, 'db-strategy', 'Q3 Launch', 'jane_doe');
        if (!okrResult || !okrResult.id) {
            throw new Error('generateOKR failed to return a valid page payload.');
        }
        console.log('✅ generateOKR executed successfully.');

        const leanCanvasResult = await notionSync.strategy.generateLeanCanvas(mockNotionClient, 'db-strategy', 'Project Alpha');
        if (!leanCanvasResult || !leanCanvasResult.id) {
            throw new Error('generateLeanCanvas failed to return a valid page payload.');
        }
        console.log('✅ generateLeanCanvas executed successfully.');

        const porterResult = await notionSync.strategy.generatePorterFiveForces(mockNotionClient, 'db-strategy', 'SaaS CRM Market');
        if (!porterResult || !porterResult.id) {
            throw new Error('generatePorterFiveForces failed to return a valid page payload.');
        }
        console.log('✅ generatePorterFiveForces executed successfully.');
        
        // Check visualization tool
        if (typeof notionSync.visualization.generateChartBlock !== 'function') {
            throw new Error('Visualization tools are missing!');
        }
        const chartBlock = await notionSync.visualization.generateChartBlock('bar', ['A', 'B'], [{ data: [1, 2] }], 'Test Chart');
        if (chartBlock.type !== 'image' || !chartBlock.image.external.url.includes('quickchart.io')) {
            throw new Error('generateChartBlock returned an invalid block payload.');
        }
        console.log('✅ generateChartBlock executed successfully.');
        
        // Check NotionSyncClient
        if (typeof notionSync.NotionSyncClient !== 'function') {
            throw new Error('NotionSyncClient is missing!');
        }
        const clientInstance = new notionSync.NotionSyncClient('dummy-token');
        if (!clientInstance.pages.create || typeof clientInstance._wrapWithRetry !== 'function') {
            throw new Error('NotionSyncClient failed to wrap methods properly.');
        }
        console.log('✅ NotionSyncClient instantiated and methods wrapped successfully.');

        console.log('\n✅ All tests successfully passed!');
    } catch (error) {
        console.error('🚨 Lab test failed:', error.message);
        process.exit(1);
    }
}

runTests();

