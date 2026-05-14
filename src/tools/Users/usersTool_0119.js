/**
 * Generated Tool: usersTool_0119
 * Domain: Users
 * ID: 0119
 */
exports.usersTool_0119 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0119:', error);
    throw error;
  }
};
