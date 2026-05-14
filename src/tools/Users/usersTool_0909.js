/**
 * Generated Tool: usersTool_0909
 * Domain: Users
 * ID: 0909
 */
exports.usersTool_0909 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0909:', error);
    throw error;
  }
};
