/**
 * Generated Tool: commentsTool_0379
 * Domain: Comments
 * ID: 0379
 */
exports.commentsTool_0379 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0379:', error);
    throw error;
  }
};
