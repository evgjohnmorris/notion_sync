/**
 * Generated Tool: databasesTool_0836
 * Domain: Databases
 * ID: 0836
 */
exports.databasesTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0836:', error);
    throw error;
  }
};
