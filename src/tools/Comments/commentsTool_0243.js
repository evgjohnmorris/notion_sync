/**
 * Generated Tool: commentsTool_0243
 * Domain: Comments
 * ID: 0243
 */
exports.commentsTool_0243 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0243:', error);
    throw error;
  }
};
