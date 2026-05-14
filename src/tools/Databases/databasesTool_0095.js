/**
 * Generated Tool: databasesTool_0095
 * Domain: Databases
 * ID: 0095
 */
exports.databasesTool_0095 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0095:', error);
    throw error;
  }
};
