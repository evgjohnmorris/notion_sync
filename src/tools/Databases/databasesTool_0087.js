/**
 * Generated Tool: databasesTool_0087
 * Domain: Databases
 * ID: 0087
 */
exports.databasesTool_0087 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0087:', error);
    throw error;
  }
};
