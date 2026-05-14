/**
 * Generated Tool: commentsTool_0271
 * Domain: Comments
 * ID: 0271
 */
exports.commentsTool_0271 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0271:', error);
    throw error;
  }
};
