/**
 * Generated Tool: usersTool_0291
 * Domain: Users
 * ID: 0291
 */
exports.usersTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0291:', error);
    throw error;
  }
};
