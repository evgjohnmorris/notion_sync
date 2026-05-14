/**
 * Generated Tool: usersTool_0204
 * Domain: Users
 * ID: 0204
 */
exports.usersTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0204:', error);
    throw error;
  }
};
