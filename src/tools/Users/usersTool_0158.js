/**
 * Generated Tool: usersTool_0158
 * Domain: Users
 * ID: 0158
 */
exports.usersTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0158:', error);
    throw error;
  }
};
