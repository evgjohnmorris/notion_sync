/**
 * Generated Tool: usersTool_0948
 * Domain: Users
 * ID: 0948
 */
exports.usersTool_0948 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0948:', error);
    throw error;
  }
};
