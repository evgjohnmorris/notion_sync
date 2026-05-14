/**
 * Generated Tool: commentsTool_0729
 * Domain: Comments
 * ID: 0729
 */
exports.commentsTool_0729 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0729:', error);
    throw error;
  }
};
