/**
 * Generated Tool: databasesTool_0900
 * Domain: Databases
 * ID: 0900
 */
exports.databasesTool_0900 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0900:', error);
    throw error;
  }
};
