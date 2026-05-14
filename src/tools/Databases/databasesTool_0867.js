/**
 * Generated Tool: databasesTool_0867
 * Domain: Databases
 * ID: 0867
 */
exports.databasesTool_0867 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0867:', error);
    throw error;
  }
};
