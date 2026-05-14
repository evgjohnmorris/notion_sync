/**
 * Generated Tool: usersTool_0947
 * Domain: Users
 * ID: 0947
 */
exports.usersTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0947:', error);
    throw error;
  }
};
