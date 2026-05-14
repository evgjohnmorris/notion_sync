/**
 * Generated Tool: commentsTool_0293
 * Domain: Comments
 * ID: 0293
 */
exports.commentsTool_0293 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0293:', error);
    throw error;
  }
};
