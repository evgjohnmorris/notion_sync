/**
 * Generated Tool: commentsTool_0432
 * Domain: Comments
 * ID: 0432
 */
exports.commentsTool_0432 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0432:', error);
    throw error;
  }
};
