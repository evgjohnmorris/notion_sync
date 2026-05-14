/**
 * Generated Tool: commentsTool_0970
 * Domain: Comments
 * ID: 0970
 */
exports.commentsTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0970:', error);
    throw error;
  }
};
