/**
 * Generated Tool: usersTool_0311
 * Domain: Users
 * ID: 0311
 */
exports.usersTool_0311 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0311:', error);
    throw error;
  }
};
