/**
 * Generated Tool: usersTool_0503
 * Domain: Users
 * ID: 0503
 */
exports.usersTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0503:', error);
    throw error;
  }
};
