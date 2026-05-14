/**
 * Generated Tool: databasesTool_0124
 * Domain: Databases
 * ID: 0124
 */
exports.databasesTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0124:', error);
    throw error;
  }
};
