/**
 * Generated Tool: databasesTool_0271
 * Domain: Databases
 * ID: 0271
 */
exports.databasesTool_0271 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0271:', error);
    throw error;
  }
};
