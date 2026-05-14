/**
 * Generated Tool: databasesTool_0511
 * Domain: Databases
 * ID: 0511
 */
exports.databasesTool_0511 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0511:', error);
    throw error;
  }
};
