/**
 * Generated Tool: usersTool_0520
 * Domain: Users
 * ID: 0520
 */
exports.usersTool_0520 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0520:', error);
    throw error;
  }
};
