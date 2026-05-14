/**
 * Generated Tool: commentsTool_0794
 * Domain: Comments
 * ID: 0794
 */
exports.commentsTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0794:', error);
    throw error;
  }
};
