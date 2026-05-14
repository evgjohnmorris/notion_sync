/**
 * Generated Tool: usersTool_0037
 * Domain: Users
 * ID: 0037
 */
exports.usersTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0037:', error);
    throw error;
  }
};
