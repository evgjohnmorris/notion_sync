/**
 * Generated Tool: databasesTool_0394
 * Domain: Databases
 * ID: 0394
 */
exports.databasesTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0394:', error);
    throw error;
  }
};
