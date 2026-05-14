/**
 * Generated Tool: commentsTool_0371
 * Domain: Comments
 * ID: 0371
 */
exports.commentsTool_0371 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0371:', error);
    throw error;
  }
};
