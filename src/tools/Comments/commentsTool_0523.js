/**
 * Generated Tool: commentsTool_0523
 * Domain: Comments
 * ID: 0523
 */
exports.commentsTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0523:', error);
    throw error;
  }
};
