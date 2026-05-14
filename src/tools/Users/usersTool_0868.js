/**
 * Generated Tool: usersTool_0868
 * Domain: Users
 * ID: 0868
 */
exports.usersTool_0868 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0868:', error);
    throw error;
  }
};
