/**
 * Generated Tool: usersTool_0935
 * Domain: Users
 * ID: 0935
 */
exports.usersTool_0935 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0935:', error);
    throw error;
  }
};
