/**
 * Generated Tool: usersTool_0224
 * Domain: Users
 * ID: 0224
 */
exports.usersTool_0224 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0224:', error);
    throw error;
  }
};
