/**
 * Generated Tool: usersTool_0926
 * Domain: Users
 * ID: 0926
 */
exports.usersTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0926:', error);
    throw error;
  }
};
