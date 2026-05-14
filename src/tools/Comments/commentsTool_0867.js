/**
 * Generated Tool: commentsTool_0867
 * Domain: Comments
 * ID: 0867
 */
exports.commentsTool_0867 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0867:', error);
    throw error;
  }
};
