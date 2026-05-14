/**
 * Generated Tool: usersTool_0147
 * Domain: Users
 * ID: 0147
 */
exports.usersTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0147:', error);
    throw error;
  }
};
