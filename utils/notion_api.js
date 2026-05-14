require('dotenv').config();
const { Client } = require("@notionhq/client");

/**
 * Initializes and returns a Notion Client instance.
 * @returns {Client}
 */
function getNotionClient() {
  const token = process.env.NOTION_TOKEN;
  if (!token || token === 'your_secret_integration_token_here') {
    throw new Error("NOTION_TOKEN is not set in .env file.");
  }
  return new Client({ auth: token });
}

/**
 * Lists users in the Notion workspace.
 * Useful for verifying connectivity.
 */
async function listUsers() {
  const notion = getNotionClient();
  try {
    const response = await notion.users.list({});
    return response.results;
  } catch (error) {
    console.error("Error listing users:", error.message);
    throw error;
  }
}

/**
 * Retrieves a database by ID.
 * @param {string} databaseId 
 */
async function getDatabase(databaseId) {
  const notion = getNotionClient();
  try {
    const response = await notion.databases.retrieve({ database_id: databaseId });
    return response;
  } catch (error) {
    console.error("Error retrieving database:", error.message);
    throw error;
  }
}

module.exports = {
  getNotionClient,
  listUsers,
  getDatabase
};
