/**
 * Notion Tool - ISO_Standards
 * This is a static entry point for the ISO_Standards macro tools.
 * In runtime, this is handled by the NotionToolFactory dynamically.
 */
const { NotionToolFactory } = require('../factory');

module.exports = async function executeISOStandardsMacro(notionClient, params) {
    const factory = new NotionToolFactory();
    const tools = factory.generate();
    
    // Find the smart_create tool for this industry
    for (const [name, tool] of tools.entries()) {
        if (tool.domain === 'ISO_Standards' && tool.enhancement === 'smart_create') {
            return await tool.handler(notionClient, params);
        }
    }
    
    throw new Error('Tool not found');
};
