/**
 * Generated Tool: usersTool_0798
 * Domain: Users
 * ID: 0798
 */
exports.usersTool_0798 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0798:', error);
    throw error;
  }
};
