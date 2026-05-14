/**
 * Generated Tool: databasesTool_0601
 * Domain: Databases
 * ID: 0601
 */
exports.databasesTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0601:', error);
    throw error;
  }
};
