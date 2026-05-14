/**
 * Generated Tool: usersTool_0700
 * Domain: Users
 * ID: 0700
 */
exports.usersTool_0700 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0700:', error);
    throw error;
  }
};
