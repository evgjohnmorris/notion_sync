/**
 * Generated Tool: databasesTool_0863
 * Domain: Databases
 * ID: 0863
 */
exports.databasesTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0863:', error);
    throw error;
  }
};
