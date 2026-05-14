/**
 * Generated Tool: usersTool_0753
 * Domain: Users
 * ID: 0753
 */
exports.usersTool_0753 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0753:', error);
    throw error;
  }
};
