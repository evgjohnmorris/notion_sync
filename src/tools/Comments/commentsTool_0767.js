/**
 * Generated Tool: commentsTool_0767
 * Domain: Comments
 * ID: 0767
 */
exports.commentsTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0767:', error);
    throw error;
  }
};
