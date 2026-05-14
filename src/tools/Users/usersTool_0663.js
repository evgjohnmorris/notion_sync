/**
 * Generated Tool: usersTool_0663
 * Domain: Users
 * ID: 0663
 */
exports.usersTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0663:', error);
    throw error;
  }
};
