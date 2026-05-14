/**
 * Generated Tool: commentsTool_0518
 * Domain: Comments
 * ID: 0518
 */
exports.commentsTool_0518 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0518:', error);
    throw error;
  }
};
