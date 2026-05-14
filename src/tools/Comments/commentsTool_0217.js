/**
 * Generated Tool: commentsTool_0217
 * Domain: Comments
 * ID: 0217
 */
exports.commentsTool_0217 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0217:', error);
    throw error;
  }
};
