/**
 * Generated Tool: databasesTool_0503
 * Domain: Databases
 * ID: 0503
 */
exports.databasesTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0503:', error);
    throw error;
  }
};
