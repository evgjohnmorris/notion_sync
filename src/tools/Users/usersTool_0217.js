/**
 * Generated Tool: usersTool_0217
 * Domain: Users
 * ID: 0217
 */
exports.usersTool_0217 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0217:', error);
    throw error;
  }
};
