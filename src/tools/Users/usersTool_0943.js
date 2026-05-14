/**
 * Generated Tool: usersTool_0943
 * Domain: Users
 * ID: 0943
 */
exports.usersTool_0943 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0943:', error);
    throw error;
  }
};
