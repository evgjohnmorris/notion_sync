/**
 * Generated Tool: usersTool_0443
 * Domain: Users
 * ID: 0443
 */
exports.usersTool_0443 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0443:', error);
    throw error;
  }
};
