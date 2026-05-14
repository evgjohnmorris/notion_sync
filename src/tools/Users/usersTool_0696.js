/**
 * Generated Tool: usersTool_0696
 * Domain: Users
 * ID: 0696
 */
exports.usersTool_0696 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0696:', error);
    throw error;
  }
};
