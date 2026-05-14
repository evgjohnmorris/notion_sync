/**
 * Generated Tool: usersTool_0286
 * Domain: Users
 * ID: 0286
 */
exports.usersTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0286:', error);
    throw error;
  }
};
