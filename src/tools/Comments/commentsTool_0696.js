/**
 * Generated Tool: commentsTool_0696
 * Domain: Comments
 * ID: 0696
 */
exports.commentsTool_0696 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0696:', error);
    throw error;
  }
};
