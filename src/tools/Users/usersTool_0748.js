/**
 * Generated Tool: usersTool_0748
 * Domain: Users
 * ID: 0748
 */
exports.usersTool_0748 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0748:', error);
    throw error;
  }
};
