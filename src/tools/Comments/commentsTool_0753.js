/**
 * Generated Tool: commentsTool_0753
 * Domain: Comments
 * ID: 0753
 */
exports.commentsTool_0753 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0753:', error);
    throw error;
  }
};
