/**
 * Generated Tool: usersTool_0404
 * Domain: Users
 * ID: 0404
 */
exports.usersTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0404:', error);
    throw error;
  }
};
