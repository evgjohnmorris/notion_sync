/**
 * Generated Tool: databasesTool_0977
 * Domain: Databases
 * ID: 0977
 */
exports.databasesTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0977:', error);
    throw error;
  }
};
