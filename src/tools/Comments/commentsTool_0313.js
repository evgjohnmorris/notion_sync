/**
 * Generated Tool: commentsTool_0313
 * Domain: Comments
 * ID: 0313
 */
exports.commentsTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0313:', error);
    throw error;
  }
};
