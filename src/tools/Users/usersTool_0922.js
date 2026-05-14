/**
 * Generated Tool: usersTool_0922
 * Domain: Users
 * ID: 0922
 */
exports.usersTool_0922 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0922:', error);
    throw error;
  }
};
