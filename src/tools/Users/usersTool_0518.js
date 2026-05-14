/**
 * Generated Tool: usersTool_0518
 * Domain: Users
 * ID: 0518
 */
exports.usersTool_0518 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0518:', error);
    throw error;
  }
};
