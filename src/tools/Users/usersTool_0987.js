/**
 * Generated Tool: usersTool_0987
 * Domain: Users
 * ID: 0987
 */
exports.usersTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0987:', error);
    throw error;
  }
};
