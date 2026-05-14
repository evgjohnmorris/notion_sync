/**
 * Generated Tool: usersTool_0680
 * Domain: Users
 * ID: 0680
 */
exports.usersTool_0680 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0680:', error);
    throw error;
  }
};
