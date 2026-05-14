/**
 * Generated Tool: databasesTool_0311
 * Domain: Databases
 * ID: 0311
 */
exports.databasesTool_0311 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0311:', error);
    throw error;
  }
};
