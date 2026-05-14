/**
 * Generated Tool: usersTool_0129
 * Domain: Users
 * ID: 0129
 */
exports.usersTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0129:', error);
    throw error;
  }
};
