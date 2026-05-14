/**
 * Generated Tool: databasesTool_0119
 * Domain: Databases
 * ID: 0119
 */
exports.databasesTool_0119 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0119:', error);
    throw error;
  }
};
