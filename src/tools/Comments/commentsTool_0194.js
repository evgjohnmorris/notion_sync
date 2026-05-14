/**
 * Generated Tool: commentsTool_0194
 * Domain: Comments
 * ID: 0194
 */
exports.commentsTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0194:', error);
    throw error;
  }
};
