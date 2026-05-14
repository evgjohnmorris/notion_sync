/**
 * Generated Tool: commentsTool_0471
 * Domain: Comments
 * ID: 0471
 */
exports.commentsTool_0471 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0471:', error);
    throw error;
  }
};
