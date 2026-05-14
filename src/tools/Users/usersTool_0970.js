/**
 * Generated Tool: usersTool_0970
 * Domain: Users
 * ID: 0970
 */
exports.usersTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0970:', error);
    throw error;
  }
};
