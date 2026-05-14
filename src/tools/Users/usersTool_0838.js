/**
 * Generated Tool: usersTool_0838
 * Domain: Users
 * ID: 0838
 */
exports.usersTool_0838 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0838:', error);
    throw error;
  }
};
