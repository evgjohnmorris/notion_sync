/**
 * Generated Tool: usersTool_0827
 * Domain: Users
 * ID: 0827
 */
exports.usersTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0827:', error);
    throw error;
  }
};
