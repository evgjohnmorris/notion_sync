/**
 * Generated Tool: usersTool_0894
 * Domain: Users
 * ID: 0894
 */
exports.usersTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0894:', error);
    throw error;
  }
};
