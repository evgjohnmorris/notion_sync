/**
 * Generated Tool: commentsTool_0006
 * Domain: Comments
 * ID: 0006
 */
exports.commentsTool_0006 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0006:', error);
    throw error;
  }
};
