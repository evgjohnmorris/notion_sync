/**
 * Generated Tool: usersTool_0051
 * Domain: Users
 * ID: 0051
 */
exports.usersTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0051:', error);
    throw error;
  }
};
