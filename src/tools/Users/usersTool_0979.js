/**
 * Generated Tool: usersTool_0979
 * Domain: Users
 * ID: 0979
 */
exports.usersTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0979:', error);
    throw error;
  }
};
