/**
 * Generated Tool: usersTool_0590
 * Domain: Users
 * ID: 0590
 */
exports.usersTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0590:', error);
    throw error;
  }
};
