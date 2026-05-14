/**
 * Generated Tool: databasesTool_0987
 * Domain: Databases
 * ID: 0987
 */
exports.databasesTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0987:', error);
    throw error;
  }
};
