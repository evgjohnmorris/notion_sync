/**
 * Generated Tool: usersTool_0691
 * Domain: Users
 * ID: 0691
 */
exports.usersTool_0691 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0691:', error);
    throw error;
  }
};
