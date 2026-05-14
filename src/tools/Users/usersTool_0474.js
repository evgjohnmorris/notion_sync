/**
 * Generated Tool: usersTool_0474
 * Domain: Users
 * ID: 0474
 */
exports.usersTool_0474 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0474:', error);
    throw error;
  }
};
