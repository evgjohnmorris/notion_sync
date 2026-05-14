/**
 * Generated Tool: usersTool_0157
 * Domain: Users
 * ID: 0157
 */
exports.usersTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0157:', error);
    throw error;
  }
};
