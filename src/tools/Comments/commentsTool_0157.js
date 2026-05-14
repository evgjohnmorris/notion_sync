/**
 * Generated Tool: commentsTool_0157
 * Domain: Comments
 * ID: 0157
 */
exports.commentsTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0157:', error);
    throw error;
  }
};
