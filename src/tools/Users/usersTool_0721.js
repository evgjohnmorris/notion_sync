/**
 * Generated Tool: usersTool_0721
 * Domain: Users
 * ID: 0721
 */
exports.usersTool_0721 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0721:', error);
    throw error;
  }
};
