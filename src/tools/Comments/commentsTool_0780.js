/**
 * Generated Tool: commentsTool_0780
 * Domain: Comments
 * ID: 0780
 */
exports.commentsTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0780:', error);
    throw error;
  }
};
