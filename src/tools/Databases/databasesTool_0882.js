/**
 * Generated Tool: databasesTool_0882
 * Domain: Databases
 * ID: 0882
 */
exports.databasesTool_0882 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0882:', error);
    throw error;
  }
};
