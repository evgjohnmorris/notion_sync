/**
 * Generated Tool: databasesTool_0290
 * Domain: Databases
 * ID: 0290
 */
exports.databasesTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0290:', error);
    throw error;
  }
};
