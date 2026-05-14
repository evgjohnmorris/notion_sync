/**
 * Generated Tool: databasesTool_0083
 * Domain: Databases
 * ID: 0083
 */
exports.databasesTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0083:', error);
    throw error;
  }
};
