/**
 * Generated Tool: databasesTool_0778
 * Domain: Databases
 * ID: 0778
 */
exports.databasesTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0778:', error);
    throw error;
  }
};
