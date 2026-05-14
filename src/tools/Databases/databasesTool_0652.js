/**
 * Generated Tool: databasesTool_0652
 * Domain: Databases
 * ID: 0652
 */
exports.databasesTool_0652 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0652:', error);
    throw error;
  }
};
