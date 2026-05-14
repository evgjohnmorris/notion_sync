/**
 * Generated Tool: commentsTool_0237
 * Domain: Comments
 * ID: 0237
 */
exports.commentsTool_0237 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0237:', error);
    throw error;
  }
};
