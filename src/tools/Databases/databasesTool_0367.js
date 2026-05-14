/**
 * Generated Tool: databasesTool_0367
 * Domain: Databases
 * ID: 0367
 */
exports.databasesTool_0367 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0367:', error);
    throw error;
  }
};
