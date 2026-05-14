/**
 * Generated Tool: databasesTool_0460
 * Domain: Databases
 * ID: 0460
 */
exports.databasesTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0460:', error);
    throw error;
  }
};
