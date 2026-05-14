/**
 * Generated Tool: commentsTool_0192
 * Domain: Comments
 * ID: 0192
 */
exports.commentsTool_0192 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0192:', error);
    throw error;
  }
};
