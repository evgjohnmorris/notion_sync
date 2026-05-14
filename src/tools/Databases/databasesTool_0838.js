/**
 * Generated Tool: databasesTool_0838
 * Domain: Databases
 * ID: 0838
 */
exports.databasesTool_0838 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0838:', error);
    throw error;
  }
};
