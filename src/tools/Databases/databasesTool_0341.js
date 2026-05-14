/**
 * Generated Tool: databasesTool_0341
 * Domain: Databases
 * ID: 0341
 */
exports.databasesTool_0341 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0341:', error);
    throw error;
  }
};
