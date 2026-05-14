/**
 * Generated Tool: commentsTool_0511
 * Domain: Comments
 * ID: 0511
 */
exports.commentsTool_0511 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0511:', error);
    throw error;
  }
};
