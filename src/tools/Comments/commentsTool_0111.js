/**
 * Generated Tool: commentsTool_0111
 * Domain: Comments
 * ID: 0111
 */
exports.commentsTool_0111 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0111:', error);
    throw error;
  }
};
