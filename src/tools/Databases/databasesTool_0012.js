/**
 * Generated Tool: databasesTool_0012
 * Domain: Databases
 * ID: 0012
 */
exports.databasesTool_0012 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0012:', error);
    throw error;
  }
};
