/**
 * Generated Tool: usersTool_0804
 * Domain: Users
 * ID: 0804
 */
exports.usersTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0804:', error);
    throw error;
  }
};
