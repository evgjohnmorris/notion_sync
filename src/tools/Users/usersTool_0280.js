/**
 * Generated Tool: usersTool_0280
 * Domain: Users
 * ID: 0280
 */
exports.usersTool_0280 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0280:', error);
    throw error;
  }
};
