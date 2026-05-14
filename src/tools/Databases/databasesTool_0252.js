/**
 * Generated Tool: databasesTool_0252
 * Domain: Databases
 * ID: 0252
 */
exports.databasesTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0252:', error);
    throw error;
  }
};
