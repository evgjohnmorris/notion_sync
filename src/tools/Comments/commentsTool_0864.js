/**
 * Generated Tool: commentsTool_0864
 * Domain: Comments
 * ID: 0864
 */
exports.commentsTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0864:', error);
    throw error;
  }
};
