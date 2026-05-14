/**
 * Generated Tool: usersTool_0843
 * Domain: Users
 * ID: 0843
 */
exports.usersTool_0843 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0843:', error);
    throw error;
  }
};
