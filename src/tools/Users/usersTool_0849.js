/**
 * Generated Tool: usersTool_0849
 * Domain: Users
 * ID: 0849
 */
exports.usersTool_0849 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0849:', error);
    throw error;
  }
};
