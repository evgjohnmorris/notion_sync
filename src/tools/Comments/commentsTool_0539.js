/**
 * Generated Tool: commentsTool_0539
 * Domain: Comments
 * ID: 0539
 */
exports.commentsTool_0539 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0539:', error);
    throw error;
  }
};
