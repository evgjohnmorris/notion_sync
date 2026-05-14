/**
 * Generated Tool: commentsTool_0615
 * Domain: Comments
 * ID: 0615
 */
exports.commentsTool_0615 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0615:', error);
    throw error;
  }
};
