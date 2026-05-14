/**
 * Generated Tool: databasesTool_0264
 * Domain: Databases
 * ID: 0264
 */
exports.databasesTool_0264 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0264:', error);
    throw error;
  }
};
