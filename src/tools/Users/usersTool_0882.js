/**
 * Generated Tool: usersTool_0882
 * Domain: Users
 * ID: 0882
 */
exports.usersTool_0882 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0882:', error);
    throw error;
  }
};
