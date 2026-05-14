/**
 * Generated Tool: commentsTool_0286
 * Domain: Comments
 * ID: 0286
 */
exports.commentsTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0286:', error);
    throw error;
  }
};
