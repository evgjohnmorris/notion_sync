/**
 * Generated Tool: databasesTool_0089
 * Domain: Databases
 * ID: 0089
 */
exports.databasesTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0089:', error);
    throw error;
  }
};
