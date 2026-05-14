/**
 * Generated Tool: usersTool_0354
 * Domain: Users
 * ID: 0354
 */
exports.usersTool_0354 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0354:', error);
    throw error;
  }
};
