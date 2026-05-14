/**
 * Generated Tool: commentsTool_0149
 * Domain: Comments
 * ID: 0149
 */
exports.commentsTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0149:', error);
    throw error;
  }
};
