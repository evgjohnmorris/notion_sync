/**
 * Generated Tool: commentsTool_0381
 * Domain: Comments
 * ID: 0381
 */
exports.commentsTool_0381 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0381:', error);
    throw error;
  }
};
