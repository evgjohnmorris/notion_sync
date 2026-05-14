/**
 * Generated Tool: usersTool_0271
 * Domain: Users
 * ID: 0271
 */
exports.usersTool_0271 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0271:', error);
    throw error;
  }
};
