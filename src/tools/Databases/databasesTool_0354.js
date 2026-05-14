/**
 * Generated Tool: databasesTool_0354
 * Domain: Databases
 * ID: 0354
 */
exports.databasesTool_0354 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0354:', error);
    throw error;
  }
};
