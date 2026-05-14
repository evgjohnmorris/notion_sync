/**
 * Generated Tool: commentsTool_0061
 * Domain: Comments
 * ID: 0061
 */
exports.commentsTool_0061 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0061:', error);
    throw error;
  }
};
