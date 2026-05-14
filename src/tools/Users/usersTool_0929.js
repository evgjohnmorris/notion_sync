/**
 * Generated Tool: usersTool_0929
 * Domain: Users
 * ID: 0929
 */
exports.usersTool_0929 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0929:', error);
    throw error;
  }
};
