/**
 * Generated Tool: usersTool_0883
 * Domain: Users
 * ID: 0883
 */
exports.usersTool_0883 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0883:', error);
    throw error;
  }
};
