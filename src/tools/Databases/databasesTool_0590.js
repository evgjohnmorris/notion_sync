/**
 * Generated Tool: databasesTool_0590
 * Domain: Databases
 * ID: 0590
 */
exports.databasesTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0590:', error);
    throw error;
  }
};
