/**
 * Generated Tool: usersTool_0293
 * Domain: Users
 * ID: 0293
 */
exports.usersTool_0293 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0293:', error);
    throw error;
  }
};
