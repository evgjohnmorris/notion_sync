/**
 * Generated Tool: databasesTool_0286
 * Domain: Databases
 * ID: 0286
 */
exports.databasesTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0286:', error);
    throw error;
  }
};
