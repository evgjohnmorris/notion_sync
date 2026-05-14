/**
 * Generated Tool: usersTool_0860
 * Domain: Users
 * ID: 0860
 */
exports.usersTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0860:', error);
    throw error;
  }
};
