/**
 * Generated Tool: commentsTool_0963
 * Domain: Comments
 * ID: 0963
 */
exports.commentsTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0963:', error);
    throw error;
  }
};
