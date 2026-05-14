/**
 * Generated Tool: databasesTool_0963
 * Domain: Databases
 * ID: 0963
 */
exports.databasesTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0963:', error);
    throw error;
  }
};
