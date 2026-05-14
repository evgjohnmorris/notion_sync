const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const industries = [
    'Trade',
    'Logistics',
    'Import',
    'Export',
    'Brokerage',
    'Taxes',
    'ISO_Standards'
];

const toolsDir = path.join(__dirname, '../src/tools');

if (!fs.existsSync(toolsDir)) {
    fs.mkdirSync(toolsDir, { recursive: true });
}

for (const industry of industries) {
    const fileName = `notion_${industry.toLowerCase()}_macro.js`;
    const filePath = path.join(toolsDir, fileName);
    
    console.log(`Generating file for ${industry}...`);
    
    const fileContent = `/**
 * Notion Tool - ${industry}
 * This is a static entry point for the ${industry} macro tools.
 * In runtime, this is handled by the NotionToolFactory dynamically.
 */
const { NotionToolFactory } = require('../factory');

module.exports = async function execute${industry.replace('_', '')}Macro(notionClient, params) {
    const factory = new NotionToolFactory();
    const tools = factory.generate();
    
    // Find the smart_create tool for this industry
    for (const [name, tool] of tools.entries()) {
        if (tool.domain === '${industry}' && tool.enhancement === 'smart_create') {
            return await tool.handler(notionClient, params);
        }
    }
    
    throw new Error('Tool not found');
};
`;

    // 1. Create file
    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`Created ${filePath}`);
    
    // 2. Add and Commit
    try {
        console.log(`Committing ${fileName}...`);
        execSync(`git add "${filePath}"`, { stdio: 'inherit' });
        execSync(`git commit -m "Add static tool wrapper for ${industry}"`, { stdio: 'inherit' });
        
        // 3. Push
        console.log(`Pushing ${fileName} to GitHub...`);
        execSync(`git push origin main`, { stdio: 'inherit' });
        
        // 4. Delete locally
        console.log(`Deleting ${fileName} from local drive to save space...`);
        fs.unlinkSync(filePath);
        console.log(`Deleted ${filePath}`);
        console.log('---');
    } catch (error) {
        console.error(`Error processing ${industry}:`, error.message);
    }
}

console.log('Finished generating, pushing, and deleting files.');
