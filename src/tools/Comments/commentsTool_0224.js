/**
 * Generated Tool: commentsTool_0224
 * Domain: Comments
 * ID: 0224
 */
exports.commentsTool_0224 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0224:', error);
    throw error;
  }
};
