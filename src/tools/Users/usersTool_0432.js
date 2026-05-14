/**
 * Generated Tool: usersTool_0432
 * Domain: Users
 * ID: 0432
 */
exports.usersTool_0432 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0432:', error);
    throw error;
  }
};
