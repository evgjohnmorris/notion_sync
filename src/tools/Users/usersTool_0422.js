/**
 * Generated Tool: usersTool_0422
 * Domain: Users
 * ID: 0422
 */
exports.usersTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0422:', error);
    throw error;
  }
};
