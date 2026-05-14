/**
 * Generated Tool: usersTool_0038
 * Domain: Users
 * ID: 0038
 */
exports.usersTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0038:', error);
    throw error;
  }
};
