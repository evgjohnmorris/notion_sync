/**
 * Generated Tool: databasesTool_0589
 * Domain: Databases
 * ID: 0589
 */
exports.databasesTool_0589 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0589:', error);
    throw error;
  }
};
