/**
 * Generated Tool: usersTool_0605
 * Domain: Users
 * ID: 0605
 */
exports.usersTool_0605 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0605:', error);
    throw error;
  }
};
