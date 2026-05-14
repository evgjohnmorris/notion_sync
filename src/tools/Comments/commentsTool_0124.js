/**
 * Generated Tool: commentsTool_0124
 * Domain: Comments
 * ID: 0124
 */
exports.commentsTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0124:', error);
    throw error;
  }
};
