/**
 * Generated Tool: commentsTool_0258
 * Domain: Comments
 * ID: 0258
 */
exports.commentsTool_0258 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0258:', error);
    throw error;
  }
};
