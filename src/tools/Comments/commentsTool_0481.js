/**
 * Generated Tool: commentsTool_0481
 * Domain: Comments
 * ID: 0481
 */
exports.commentsTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0481:', error);
    throw error;
  }
};
