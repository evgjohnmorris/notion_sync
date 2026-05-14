/**
 * Generated Tool: databasesTool_0744
 * Domain: Databases
 * ID: 0744
 */
exports.databasesTool_0744 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0744:', error);
    throw error;
  }
};
