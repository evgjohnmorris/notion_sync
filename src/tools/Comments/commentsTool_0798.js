/**
 * Generated Tool: commentsTool_0798
 * Domain: Comments
 * ID: 0798
 */
exports.commentsTool_0798 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0798:', error);
    throw error;
  }
};
