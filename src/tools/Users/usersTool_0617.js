/**
 * Generated Tool: usersTool_0617
 * Domain: Users
 * ID: 0617
 */
exports.usersTool_0617 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0617:', error);
    throw error;
  }
};
