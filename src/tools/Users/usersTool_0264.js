/**
 * Generated Tool: usersTool_0264
 * Domain: Users
 * ID: 0264
 */
exports.usersTool_0264 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0264:', error);
    throw error;
  }
};
