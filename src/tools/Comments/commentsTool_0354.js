/**
 * Generated Tool: commentsTool_0354
 * Domain: Comments
 * ID: 0354
 */
exports.commentsTool_0354 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0354:', error);
    throw error;
  }
};
