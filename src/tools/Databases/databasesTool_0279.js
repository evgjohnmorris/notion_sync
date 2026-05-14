/**
 * Generated Tool: databasesTool_0279
 * Domain: Databases
 * ID: 0279
 */
exports.databasesTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0279:', error);
    throw error;
  }
};
