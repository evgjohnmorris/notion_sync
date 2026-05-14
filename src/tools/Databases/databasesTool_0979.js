/**
 * Generated Tool: databasesTool_0979
 * Domain: Databases
 * ID: 0979
 */
exports.databasesTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0979:', error);
    throw error;
  }
};
