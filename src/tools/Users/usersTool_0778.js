/**
 * Generated Tool: usersTool_0778
 * Domain: Users
 * ID: 0778
 */
exports.usersTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0778:', error);
    throw error;
  }
};
