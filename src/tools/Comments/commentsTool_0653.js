/**
 * Generated Tool: commentsTool_0653
 * Domain: Comments
 * ID: 0653
 */
exports.commentsTool_0653 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0653:', error);
    throw error;
  }
};
