/**
 * Generated Tool: usersTool_0376
 * Domain: Users
 * ID: 0376
 */
exports.usersTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0376:', error);
    throw error;
  }
};
