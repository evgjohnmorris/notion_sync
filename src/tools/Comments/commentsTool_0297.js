/**
 * Generated Tool: commentsTool_0297
 * Domain: Comments
 * ID: 0297
 */
exports.commentsTool_0297 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0297:', error);
    throw error;
  }
};
