/**
 * Generated Tool: databasesTool_0839
 * Domain: Databases
 * ID: 0839
 */
exports.databasesTool_0839 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0839:', error);
    throw error;
  }
};
