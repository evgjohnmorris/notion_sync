/**
 * Generated Tool: usersTool_0477
 * Domain: Users
 * ID: 0477
 */
exports.usersTool_0477 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0477:', error);
    throw error;
  }
};
