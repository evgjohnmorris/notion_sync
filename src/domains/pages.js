const { resolveNotionId } = require('../ai-enhancements/fuzzy-match');

async function createFuzzy(notionClient, parentName, params = {}) {
    const parentId = await resolveNotionId(notionClient, parentName, 'database');
    const payload = {
        parent: { database_id: parentId },
        ...params
    };
    return notionClient.pages.create(payload);
}

async function updateFuzzy(notionClient, pageName, params = {}) {
    const pageId = await resolveNotionId(notionClient, pageName, 'page');
    const payload = {
        page_id: pageId,
        ...params
    };
    return notionClient.pages.update(payload);
}

module.exports = {
    createFuzzy,
    updateFuzzy
};
