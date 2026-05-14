/**
 * Generated Tool: usersTool_0111
 * Domain: Users
 * ID: 0111
 */
exports.usersTool_0111 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0111:', error);
    throw error;
  }
};
