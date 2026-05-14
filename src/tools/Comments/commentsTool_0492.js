/**
 * Generated Tool: commentsTool_0492
 * Domain: Comments
 * ID: 0492
 */
exports.commentsTool_0492 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0492:', error);
    throw error;
  }
};
