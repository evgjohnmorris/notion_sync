/**
 * Generated Tool: commentsTool_0882
 * Domain: Comments
 * ID: 0882
 */
exports.commentsTool_0882 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0882:', error);
    throw error;
  }
};
