/**
 * Generated Tool: usersTool_0123
 * Domain: Users
 * ID: 0123
 */
exports.usersTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0123:', error);
    throw error;
  }
};
