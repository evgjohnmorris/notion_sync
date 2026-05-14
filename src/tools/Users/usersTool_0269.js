/**
 * Generated Tool: usersTool_0269
 * Domain: Users
 * ID: 0269
 */
exports.usersTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0269:', error);
    throw error;
  }
};
