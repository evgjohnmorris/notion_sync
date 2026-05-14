/**
 * Generated Tool: usersTool_0219
 * Domain: Users
 * ID: 0219
 */
exports.usersTool_0219 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0219:', error);
    throw error;
  }
};
