/**
 * Generated Tool: usersTool_0963
 * Domain: Users
 * ID: 0963
 */
exports.usersTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0963:', error);
    throw error;
  }
};
