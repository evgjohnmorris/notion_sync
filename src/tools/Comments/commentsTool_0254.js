/**
 * Generated Tool: commentsTool_0254
 * Domain: Comments
 * ID: 0254
 */
exports.commentsTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0254:', error);
    throw error;
  }
};
