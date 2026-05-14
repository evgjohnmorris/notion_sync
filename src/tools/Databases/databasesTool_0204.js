/**
 * Generated Tool: databasesTool_0204
 * Domain: Databases
 * ID: 0204
 */
exports.databasesTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0204:', error);
    throw error;
  }
};
