/**
 * Generated Tool: databasesTool_0157
 * Domain: Databases
 * ID: 0157
 */
exports.databasesTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0157:', error);
    throw error;
  }
};
