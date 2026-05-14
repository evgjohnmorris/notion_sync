/**
 * Generated Tool: usersTool_0756
 * Domain: Users
 * ID: 0756
 */
exports.usersTool_0756 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0756:', error);
    throw error;
  }
};
