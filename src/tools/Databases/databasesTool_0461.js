/**
 * Generated Tool: databasesTool_0461
 * Domain: Databases
 * ID: 0461
 */
exports.databasesTool_0461 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0461:', error);
    throw error;
  }
};
