/**
 * Generated Tool: databasesTool_0352
 * Domain: Databases
 * ID: 0352
 */
exports.databasesTool_0352 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0352:', error);
    throw error;
  }
};
