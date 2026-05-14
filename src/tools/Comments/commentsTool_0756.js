/**
 * Generated Tool: commentsTool_0756
 * Domain: Comments
 * ID: 0756
 */
exports.commentsTool_0756 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0756:', error);
    throw error;
  }
};
