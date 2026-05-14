/**
 * Generated Tool: usersTool_0303
 * Domain: Users
 * ID: 0303
 */
exports.usersTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0303:', error);
    throw error;
  }
};
