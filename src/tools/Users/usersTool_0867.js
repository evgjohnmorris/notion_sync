/**
 * Generated Tool: usersTool_0867
 * Domain: Users
 * ID: 0867
 */
exports.usersTool_0867 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0867:', error);
    throw error;
  }
};
