/**
 * Generated Tool: usersTool_0839
 * Domain: Users
 * ID: 0839
 */
exports.usersTool_0839 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0839:', error);
    throw error;
  }
};
