/**
 * Generated Tool: commentsTool_0624
 * Domain: Comments
 * ID: 0624
 */
exports.commentsTool_0624 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0624:', error);
    throw error;
  }
};
