/**
 * Notion Fuzzy Matcher Engine
 * Resolves natural language names (e.g. "Q3 Roadmap") to 32-character Notion UUIDs.
 */

async function resolveNotionId(notionClient, query, type = 'database') {
    if (!notionClient) {
        // Mock implementation for testing if client is null
        console.log(`[Mock] Searching workspace for ${type} matching "${query}"...`);
        // Simulated match delay
        await new Promise(resolve => setTimeout(resolve, 50));
        console.log(`[Mock] Best match found: 8b4c-9f1e-1234-abcd`);
        return '8b4c-9f1e-1234-abcd';
    }

    try {
        const response = await notionClient.search({
            query: query,
            filter: {
                value: type,
                property: 'object'
            },
            page_size: 10
        });

        if (!response.results || response.results.length === 0) {
            throw new Error(`Could not find any ${type} matching "${query}"`);
        }

        // Notion Search API returns results ordered by relevance by default.
        // The first result is typically the best fuzzy match.
        const topResult = response.results[0];
        return topResult.id;

    } catch (error) {
        console.error(`Error during fuzzy match for "${query}":`, error);
        throw error;
    }
}

module.exports = { resolveNotionId };
