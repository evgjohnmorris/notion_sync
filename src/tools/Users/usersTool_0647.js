/**
 * Generated Tool: usersTool_0647
 * Domain: Users
 * ID: 0647
 */
exports.usersTool_0647 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0647:', error);
    throw error;
  }
};
