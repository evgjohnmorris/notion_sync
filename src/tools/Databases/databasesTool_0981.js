/**
 * Generated Tool: databasesTool_0981
 * Domain: Databases
 * ID: 0981
 */
exports.databasesTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0981:', error);
    throw error;
  }
};
