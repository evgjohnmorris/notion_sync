/**
 * Generated Tool: commentsTool_0691
 * Domain: Comments
 * ID: 0691
 */
exports.commentsTool_0691 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0691:', error);
    throw error;
  }
};
