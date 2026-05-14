/**
 * Generated Tool: usersTool_0448
 * Domain: Users
 * ID: 0448
 */
exports.usersTool_0448 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0448:', error);
    throw error;
  }
};
