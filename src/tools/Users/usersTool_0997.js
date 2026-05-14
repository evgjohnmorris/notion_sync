/**
 * Generated Tool: usersTool_0997
 * Domain: Users
 * ID: 0997
 */
exports.usersTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0997:', error);
    throw error;
  }
};
