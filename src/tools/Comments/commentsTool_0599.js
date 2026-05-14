/**
 * Generated Tool: commentsTool_0599
 * Domain: Comments
 * ID: 0599
 */
exports.commentsTool_0599 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0599:', error);
    throw error;
  }
};
