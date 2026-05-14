/**
 * Generated Tool: commentsTool_0860
 * Domain: Comments
 * ID: 0860
 */
exports.commentsTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0860:', error);
    throw error;
  }
};
