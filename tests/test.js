const notionSync = require('../src/index');

async function runTests() {
    console.log('🧪 Starting Lab Test for Semantic Notion Sync API...');
    
    try {
        console.log('\n--- Running Sanity Checks ---');

        // Check if domains exist
        if (!notionSync.databases || !notionSync.pages || !notionSync.industry) {
            throw new Error('API is missing core domains!');
        }
        console.log('✅ Core domains are exported.');

        // Mock Notion Client
        const mockNotionClient = {
            pages: {
                create: async (payload) => payload,
                update: async (payload) => payload
            },
            databases: {
                query: async (payload) => payload
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
        
        console.log('\n✅ All tests successfully passed!');
    } catch (error) {
        console.error('🚨 Lab test failed:', error.message);
        process.exit(1);
    }
}

runTests();

