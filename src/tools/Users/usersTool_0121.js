/**
 * Generated Tool: usersTool_0121
 * Domain: Users
 * ID: 0121
 */
exports.usersTool_0121 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0121:', error);
    throw error;
  }
};
