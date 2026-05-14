/**
 * Generated Tool: commentsTool_0779
 * Domain: Comments
 * ID: 0779
 */
exports.commentsTool_0779 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0779:', error);
    throw error;
  }
};
