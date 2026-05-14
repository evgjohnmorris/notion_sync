/**
 * Generated Tool: databasesTool_0107
 * Domain: Databases
 * ID: 0107
 */
exports.databasesTool_0107 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0107:', error);
    throw error;
  }
};
