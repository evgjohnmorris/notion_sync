/**
 * Generated Tool: usersTool_0744
 * Domain: Users
 * ID: 0744
 */
exports.usersTool_0744 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0744:', error);
    throw error;
  }
};
