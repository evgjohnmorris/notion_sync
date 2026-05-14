/**
 * Generated Tool: usersTool_0919
 * Domain: Users
 * ID: 0919
 */
exports.usersTool_0919 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0919:', error);
    throw error;
  }
};
