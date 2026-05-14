/**
 * Generated Tool: commentsTool_0579
 * Domain: Comments
 * ID: 0579
 */
exports.commentsTool_0579 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0579:', error);
    throw error;
  }
};
