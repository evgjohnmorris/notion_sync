/**
 * Generated Tool: databasesTool_0617
 * Domain: Databases
 * ID: 0617
 */
exports.databasesTool_0617 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0617:', error);
    throw error;
  }
};
