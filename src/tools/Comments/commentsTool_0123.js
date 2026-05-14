/**
 * Generated Tool: commentsTool_0123
 * Domain: Comments
 * ID: 0123
 */
exports.commentsTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0123:', error);
    throw error;
  }
};
