/**
 * Generated Tool: usersTool_0863
 * Domain: Users
 * ID: 0863
 */
exports.usersTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0863:', error);
    throw error;
  }
};
