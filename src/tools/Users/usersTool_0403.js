/**
 * Generated Tool: usersTool_0403
 * Domain: Users
 * ID: 0403
 */
exports.usersTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0403:', error);
    throw error;
  }
};
