/**
 * Generated Tool: commentsTool_0376
 * Domain: Comments
 * ID: 0376
 */
exports.commentsTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0376:', error);
    throw error;
  }
};
