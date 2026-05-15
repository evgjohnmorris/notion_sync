const { sqlToNotionFilter } = require('../ai-enhancements/sql-parser');
const { resolveNotionId } = require('../ai-enhancements/fuzzy-match');

async function queryWithSQL(notionClient, databaseId, sqlString) {
    const filter = sqlToNotionFilter(sqlString);
    const queryPayload = { database_id: databaseId };
    if (filter) {
        queryPayload.filter = filter;
    }
    return notionClient.databases.query(queryPayload);
}

async function fuzzyQuery(notionClient, databaseName, params = {}) {
    const dbId = await resolveNotionId(notionClient, databaseName, 'database');
    const queryPayload = { database_id: dbId, ...params };
    return notionClient.databases.query(queryPayload);
}

module.exports = {
    queryWithSQL,
    fuzzyQuery
};
