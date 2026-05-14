/**
 * Generated Tool: databasesTool_0922
 * Domain: Databases
 * ID: 0922
 */
exports.databasesTool_0922 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0922:', error);
    throw error;
  }
};
