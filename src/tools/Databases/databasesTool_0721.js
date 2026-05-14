/**
 * Generated Tool: databasesTool_0721
 * Domain: Databases
 * ID: 0721
 */
exports.databasesTool_0721 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0721:', error);
    throw error;
  }
};
