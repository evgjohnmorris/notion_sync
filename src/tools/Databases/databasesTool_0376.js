/**
 * Generated Tool: databasesTool_0376
 * Domain: Databases
 * ID: 0376
 */
exports.databasesTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0376:', error);
    throw error;
  }
};
