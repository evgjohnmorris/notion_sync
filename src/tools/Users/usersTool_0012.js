/**
 * Generated Tool: usersTool_0012
 * Domain: Users
 * ID: 0012
 */
exports.usersTool_0012 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0012:', error);
    throw error;
  }
};
