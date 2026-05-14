/**
 * Generated Tool: usersTool_0321
 * Domain: Users
 * ID: 0321
 */
exports.usersTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0321:', error);
    throw error;
  }
};
