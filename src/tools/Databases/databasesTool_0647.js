/**
 * Generated Tool: databasesTool_0647
 * Domain: Databases
 * ID: 0647
 */
exports.databasesTool_0647 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0647:', error);
    throw error;
  }
};
