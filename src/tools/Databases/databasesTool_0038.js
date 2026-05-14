/**
 * Generated Tool: databasesTool_0038
 * Domain: Databases
 * ID: 0038
 */
exports.databasesTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0038:', error);
    throw error;
  }
};
