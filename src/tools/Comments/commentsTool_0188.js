/**
 * Generated Tool: commentsTool_0188
 * Domain: Comments
 * ID: 0188
 */
exports.commentsTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0188:', error);
    throw error;
  }
};
