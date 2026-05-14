/**
 * Generated Tool: usersTool_0107
 * Domain: Users
 * ID: 0107
 */
exports.usersTool_0107 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0107:', error);
    throw error;
  }
};
