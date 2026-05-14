/**
 * Generated Tool: databasesTool_0243
 * Domain: Databases
 * ID: 0243
 */
exports.databasesTool_0243 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0243:', error);
    throw error;
  }
};
