const { NotionToolFactory } = require('./factory');

/**
 * Main entry point for the Notion Sync tools.
 * Dynamically generates and exports 100,000+ AI-enhanced Notion tools.
 */
const factory = new NotionToolFactory();
const generatedTools = factory.generate();

// Convert the Map to a standard plain object for exports
const tools = {};
for (const [key, tool] of generatedTools.entries()) {
    tools[key] = tool.handler;
    // Attach metadata to the function for reflection
    tools[key].metadata = {
        name: tool.name,
        description: tool.description,
        domain: tool.domain,
        enhancement: tool.enhancement
    };
}

module.exports = tools;
