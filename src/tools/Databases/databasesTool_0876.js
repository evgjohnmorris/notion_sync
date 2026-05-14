/**
 * Generated Tool: databasesTool_0876
 * Domain: Databases
 * ID: 0876
 */
exports.databasesTool_0876 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0876:', error);
    throw error;
  }
};
