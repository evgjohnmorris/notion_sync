/**
 * Generated Tool: commentsTool_0296
 * Domain: Comments
 * ID: 0296
 */
exports.commentsTool_0296 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0296:', error);
    throw error;
  }
};
