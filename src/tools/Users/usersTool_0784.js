/**
 * Generated Tool: usersTool_0784
 * Domain: Users
 * ID: 0784
 */
exports.usersTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0784:', error);
    throw error;
  }
};
