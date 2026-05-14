/**
 * Generated Tool: commentsTool_0317
 * Domain: Comments
 * ID: 0317
 */
exports.commentsTool_0317 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0317:', error);
    throw error;
  }
};
