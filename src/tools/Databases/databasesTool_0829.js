/**
 * Generated Tool: databasesTool_0829
 * Domain: Databases
 * ID: 0829
 */
exports.databasesTool_0829 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0829:', error);
    throw error;
  }
};
