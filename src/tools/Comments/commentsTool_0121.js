/**
 * Generated Tool: commentsTool_0121
 * Domain: Comments
 * ID: 0121
 */
exports.commentsTool_0121 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0121:', error);
    throw error;
  }
};
