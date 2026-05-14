/**
 * Generated Tool: usersTool_0243
 * Domain: Users
 * ID: 0243
 */
exports.usersTool_0243 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0243:', error);
    throw error;
  }
};
