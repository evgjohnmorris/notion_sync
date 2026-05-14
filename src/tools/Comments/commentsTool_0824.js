/**
 * Generated Tool: commentsTool_0824
 * Domain: Comments
 * ID: 0824
 */
exports.commentsTool_0824 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0824:', error);
    throw error;
  }
};
