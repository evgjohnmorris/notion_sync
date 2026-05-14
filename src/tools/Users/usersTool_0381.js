/**
 * Generated Tool: usersTool_0381
 * Domain: Users
 * ID: 0381
 */
exports.usersTool_0381 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0381:', error);
    throw error;
  }
};
