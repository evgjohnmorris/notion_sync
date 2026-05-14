/**
 * Generated Tool: usersTool_0149
 * Domain: Users
 * ID: 0149
 */
exports.usersTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0149:', error);
    throw error;
  }
};
