/**
 * Generated Tool: usersTool_0489
 * Domain: Users
 * ID: 0489
 */
exports.usersTool_0489 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0489:', error);
    throw error;
  }
};
