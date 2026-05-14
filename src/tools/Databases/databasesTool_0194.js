/**
 * Generated Tool: databasesTool_0194
 * Domain: Databases
 * ID: 0194
 */
exports.databasesTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0194:', error);
    throw error;
  }
};
