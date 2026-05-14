/**
 * Generated Tool: databasesTool_0404
 * Domain: Databases
 * ID: 0404
 */
exports.databasesTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0404:', error);
    throw error;
  }
};
