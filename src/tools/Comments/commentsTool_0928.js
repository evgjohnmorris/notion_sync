/**
 * Generated Tool: commentsTool_0928
 * Domain: Comments
 * ID: 0928
 */
exports.commentsTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0928:', error);
    throw error;
  }
};
