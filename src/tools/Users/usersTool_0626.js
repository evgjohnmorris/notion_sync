/**
 * Generated Tool: usersTool_0626
 * Domain: Users
 * ID: 0626
 */
exports.usersTool_0626 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0626:', error);
    throw error;
  }
};
