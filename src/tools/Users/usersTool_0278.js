/**
 * Generated Tool: usersTool_0278
 * Domain: Users
 * ID: 0278
 */
exports.usersTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0278:', error);
    throw error;
  }
};
