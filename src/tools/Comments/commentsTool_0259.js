/**
 * Generated Tool: commentsTool_0259
 * Domain: Comments
 * ID: 0259
 */
exports.commentsTool_0259 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0259:', error);
    throw error;
  }
};
