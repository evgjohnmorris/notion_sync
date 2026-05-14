/**
 * Generated Tool: usersTool_0824
 * Domain: Users
 * ID: 0824
 */
exports.usersTool_0824 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0824:', error);
    throw error;
  }
};
