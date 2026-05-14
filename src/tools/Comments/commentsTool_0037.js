/**
 * Generated Tool: commentsTool_0037
 * Domain: Comments
 * ID: 0037
 */
exports.commentsTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0037:', error);
    throw error;
  }
};
