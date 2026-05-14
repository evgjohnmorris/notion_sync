/**
 * Generated Tool: usersTool_0320
 * Domain: Users
 * ID: 0320
 */
exports.usersTool_0320 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0320:', error);
    throw error;
  }
};
