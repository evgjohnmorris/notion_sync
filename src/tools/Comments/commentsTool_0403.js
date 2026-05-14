/**
 * Generated Tool: commentsTool_0403
 * Domain: Comments
 * ID: 0403
 */
exports.commentsTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0403:', error);
    throw error;
  }
};
