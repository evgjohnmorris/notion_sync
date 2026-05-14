/**
 * Generated Tool: usersTool_0006
 * Domain: Users
 * ID: 0006
 */
exports.usersTool_0006 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0006:', error);
    throw error;
  }
};
