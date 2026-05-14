/**
 * Generated Tool: usersTool_0745
 * Domain: Users
 * ID: 0745
 */
exports.usersTool_0745 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0745:', error);
    throw error;
  }
};
