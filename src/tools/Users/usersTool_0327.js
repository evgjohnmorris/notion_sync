/**
 * Generated Tool: usersTool_0327
 * Domain: Users
 * ID: 0327
 */
exports.usersTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0327:', error);
    throw error;
  }
};
