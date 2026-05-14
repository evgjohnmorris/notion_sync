/**
 * Generated Tool: databasesTool_0947
 * Domain: Databases
 * ID: 0947
 */
exports.databasesTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0947:', error);
    throw error;
  }
};
