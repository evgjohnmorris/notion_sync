/**
 * Generated Tool: usersTool_0471
 * Domain: Users
 * ID: 0471
 */
exports.usersTool_0471 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0471:', error);
    throw error;
  }
};
