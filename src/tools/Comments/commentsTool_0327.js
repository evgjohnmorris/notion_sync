/**
 * Generated Tool: commentsTool_0327
 * Domain: Comments
 * ID: 0327
 */
exports.commentsTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0327:', error);
    throw error;
  }
};
