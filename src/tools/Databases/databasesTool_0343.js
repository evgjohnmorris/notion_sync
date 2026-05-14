/**
 * Generated Tool: databasesTool_0343
 * Domain: Databases
 * ID: 0343
 */
exports.databasesTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0343:', error);
    throw error;
  }
};
