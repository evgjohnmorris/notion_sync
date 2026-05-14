/**
 * Generated Tool: commentsTool_0749
 * Domain: Comments
 * ID: 0749
 */
exports.commentsTool_0749 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0749:', error);
    throw error;
  }
};
