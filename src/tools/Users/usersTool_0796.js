/**
 * Generated Tool: usersTool_0796
 * Domain: Users
 * ID: 0796
 */
exports.usersTool_0796 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0796:', error);
    throw error;
  }
};
