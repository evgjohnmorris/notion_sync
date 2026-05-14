/**
 * Generated Tool: commentsTool_0626
 * Domain: Comments
 * ID: 0626
 */
exports.commentsTool_0626 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0626:', error);
    throw error;
  }
};
