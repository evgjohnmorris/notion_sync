/**
 * Generated Tool: usersTool_0124
 * Domain: Users
 * ID: 0124
 */
exports.usersTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0124:', error);
    throw error;
  }
};
