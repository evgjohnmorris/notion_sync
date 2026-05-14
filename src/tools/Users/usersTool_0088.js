/**
 * Generated Tool: usersTool_0088
 * Domain: Users
 * ID: 0088
 */
exports.usersTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0088:', error);
    throw error;
  }
};
