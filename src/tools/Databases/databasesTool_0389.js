/**
 * Generated Tool: databasesTool_0389
 * Domain: Databases
 * ID: 0389
 */
exports.databasesTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0389:', error);
    throw error;
  }
};
