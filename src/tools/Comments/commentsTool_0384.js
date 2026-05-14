/**
 * Generated Tool: commentsTool_0384
 * Domain: Comments
 * ID: 0384
 */
exports.commentsTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0384:', error);
    throw error;
  }
};
