/**
 * Generated Tool: databasesTool_0918
 * Domain: Databases
 * ID: 0918
 */
exports.databasesTool_0918 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0918:', error);
    throw error;
  }
};
