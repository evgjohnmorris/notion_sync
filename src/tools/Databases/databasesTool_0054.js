/**
 * Generated Tool: databasesTool_0054
 * Domain: Databases
 * ID: 0054
 */
exports.databasesTool_0054 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0054:', error);
    throw error;
  }
};
