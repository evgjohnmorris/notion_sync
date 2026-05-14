/**
 * Generated Tool: usersTool_0112
 * Domain: Users
 * ID: 0112
 */
exports.usersTool_0112 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0112:', error);
    throw error;
  }
};
