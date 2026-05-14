/**
 * Generated Tool: usersTool_0296
 * Domain: Users
 * ID: 0296
 */
exports.usersTool_0296 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0296:', error);
    throw error;
  }
};
