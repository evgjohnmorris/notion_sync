/**
 * Generated Tool: databasesTool_0037
 * Domain: Databases
 * ID: 0037
 */
exports.databasesTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0037:', error);
    throw error;
  }
};
