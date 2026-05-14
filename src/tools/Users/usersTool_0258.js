/**
 * Generated Tool: usersTool_0258
 * Domain: Users
 * ID: 0258
 */
exports.usersTool_0258 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0258:', error);
    throw error;
  }
};
