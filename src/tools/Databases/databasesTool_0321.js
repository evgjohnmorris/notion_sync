/**
 * Generated Tool: databasesTool_0321
 * Domain: Databases
 * ID: 0321
 */
exports.databasesTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0321:', error);
    throw error;
  }
};
