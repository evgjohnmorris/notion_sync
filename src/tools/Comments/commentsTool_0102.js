/**
 * Generated Tool: commentsTool_0102
 * Domain: Comments
 * ID: 0102
 */
exports.commentsTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0102:', error);
    throw error;
  }
};
