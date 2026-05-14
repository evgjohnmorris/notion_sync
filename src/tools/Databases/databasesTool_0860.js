/**
 * Generated Tool: databasesTool_0860
 * Domain: Databases
 * ID: 0860
 */
exports.databasesTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0860:', error);
    throw error;
  }
};
