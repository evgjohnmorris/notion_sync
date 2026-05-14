/**
 * Generated Tool: commentsTool_0948
 * Domain: Comments
 * ID: 0948
 */
exports.commentsTool_0948 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0948:', error);
    throw error;
  }
};
