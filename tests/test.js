const { NotionToolFactory } = require('../src/factory');

async function runTests() {
    console.log('🧪 Starting Lab Test for 100,000 Dynamic Notion Tools...');
    
    try {
        const factory = new NotionToolFactory();
        const tools = factory.generate();
        
        // Verify we have at least 100,000 tools
        if (tools.size < 100000) {
            throw new Error(`Expected at least 100000 tools, but found ${tools.size}`);
        }

        console.log('\n✅ Successfully generated 100,000 tools in memory.');
        
        console.log('\n--- Running Sanity Checks ---');
        const fuzzyTool = tools.get('notion_databases_fuzzy_match_00000');
        if (typeof fuzzyTool.handler !== 'function') {
            throw new Error('Tool handler is not a valid function!');
        }
        console.log('✅ Tools properly expose async handlers.');

        console.log('\n✅ All tests successfully passed!');
    } catch (error) {
        console.error('🚨 Lab test failed:', error.message);
        process.exit(1);
    }
}

runTests();
