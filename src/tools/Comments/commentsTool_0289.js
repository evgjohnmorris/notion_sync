/**
 * Generated Tool: commentsTool_0289
 * Domain: Comments
 * ID: 0289
 */
exports.commentsTool_0289 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0289:', error);
    throw error;
  }
};
