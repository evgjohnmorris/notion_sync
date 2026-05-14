/**
 * Generated Tool: commentsTool_0489
 * Domain: Comments
 * ID: 0489
 */
exports.commentsTool_0489 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0489:', error);
    throw error;
  }
};
