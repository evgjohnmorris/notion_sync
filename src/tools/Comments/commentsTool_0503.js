/**
 * Generated Tool: commentsTool_0503
 * Domain: Comments
 * ID: 0503
 */
exports.commentsTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0503:', error);
    throw error;
  }
};
