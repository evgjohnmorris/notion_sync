/**
 * Generated Tool: usersTool_0188
 * Domain: Users
 * ID: 0188
 */
exports.usersTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0188:', error);
    throw error;
  }
};
