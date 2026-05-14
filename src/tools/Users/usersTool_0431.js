/**
 * Generated Tool: usersTool_0431
 * Domain: Users
 * ID: 0431
 */
exports.usersTool_0431 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0431:', error);
    throw error;
  }
};
