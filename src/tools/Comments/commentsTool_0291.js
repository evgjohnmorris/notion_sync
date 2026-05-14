/**
 * Generated Tool: commentsTool_0291
 * Domain: Comments
 * ID: 0291
 */
exports.commentsTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0291:', error);
    throw error;
  }
};
