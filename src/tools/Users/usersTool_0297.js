/**
 * Generated Tool: usersTool_0297
 * Domain: Users
 * ID: 0297
 */
exports.usersTool_0297 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0297:', error);
    throw error;
  }
};
