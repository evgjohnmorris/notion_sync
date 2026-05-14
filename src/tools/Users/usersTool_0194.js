/**
 * Generated Tool: usersTool_0194
 * Domain: Users
 * ID: 0194
 */
exports.usersTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0194:', error);
    throw error;
  }
};
