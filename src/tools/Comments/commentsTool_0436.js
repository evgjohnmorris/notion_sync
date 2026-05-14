/**
 * Generated Tool: commentsTool_0436
 * Domain: Comments
 * ID: 0436
 */
exports.commentsTool_0436 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0436:', error);
    throw error;
  }
};
