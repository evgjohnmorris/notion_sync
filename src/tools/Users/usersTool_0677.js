/**
 * Generated Tool: usersTool_0677
 * Domain: Users
 * ID: 0677
 */
exports.usersTool_0677 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0677:', error);
    throw error;
  }
};
