/**
 * Generated Tool: usersTool_0527
 * Domain: Users
 * ID: 0527
 */
exports.usersTool_0527 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0527:', error);
    throw error;
  }
};
