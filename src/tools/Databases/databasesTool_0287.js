/**
 * Generated Tool: databasesTool_0287
 * Domain: Databases
 * ID: 0287
 */
exports.databasesTool_0287 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0287:', error);
    throw error;
  }
};
