/**
 * Generated Tool: commentsTool_0476
 * Domain: Comments
 * ID: 0476
 */
exports.commentsTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0476:', error);
    throw error;
  }
};
