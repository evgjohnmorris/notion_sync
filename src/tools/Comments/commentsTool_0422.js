/**
 * Generated Tool: commentsTool_0422
 * Domain: Comments
 * ID: 0422
 */
exports.commentsTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0422:', error);
    throw error;
  }
};
