/**
 * Generated Tool: databasesTool_0489
 * Domain: Databases
 * ID: 0489
 */
exports.databasesTool_0489 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0489:', error);
    throw error;
  }
};
