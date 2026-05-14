/**
 * Generated Tool: usersTool_0671
 * Domain: Users
 * ID: 0671
 */
exports.usersTool_0671 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0671:', error);
    throw error;
  }
};
