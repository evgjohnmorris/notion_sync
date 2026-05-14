/**
 * Generated Tool: databasesTool_0756
 * Domain: Databases
 * ID: 0756
 */
exports.databasesTool_0756 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0756:', error);
    throw error;
  }
};
