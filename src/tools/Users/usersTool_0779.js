/**
 * Generated Tool: usersTool_0779
 * Domain: Users
 * ID: 0779
 */
exports.usersTool_0779 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0779:', error);
    throw error;
  }
};
