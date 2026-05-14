/**
 * Generated Tool: usersTool_0083
 * Domain: Users
 * ID: 0083
 */
exports.usersTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0083:', error);
    throw error;
  }
};
