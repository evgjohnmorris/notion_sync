/**
 * Generated Tool: databasesTool_0291
 * Domain: Databases
 * ID: 0291
 */
exports.databasesTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0291:', error);
    throw error;
  }
};
