/**
 * Generated Tool: usersTool_0279
 * Domain: Users
 * ID: 0279
 */
exports.usersTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0279:', error);
    throw error;
  }
};
