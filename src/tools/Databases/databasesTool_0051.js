/**
 * Generated Tool: databasesTool_0051
 * Domain: Databases
 * ID: 0051
 */
exports.databasesTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0051:', error);
    throw error;
  }
};
