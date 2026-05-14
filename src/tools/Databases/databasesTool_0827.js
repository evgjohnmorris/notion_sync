/**
 * Generated Tool: databasesTool_0827
 * Domain: Databases
 * ID: 0827
 */
exports.databasesTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0827:', error);
    throw error;
  }
};
