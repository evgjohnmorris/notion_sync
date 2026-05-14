/**
 * Generated Tool: usersTool_0593
 * Domain: Users
 * ID: 0593
 */
exports.usersTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0593:', error);
    throw error;
  }
};
