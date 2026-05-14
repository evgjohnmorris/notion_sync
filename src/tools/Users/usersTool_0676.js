/**
 * Generated Tool: usersTool_0676
 * Domain: Users
 * ID: 0676
 */
exports.usersTool_0676 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0676:', error);
    throw error;
  }
};
