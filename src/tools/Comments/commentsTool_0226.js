/**
 * Generated Tool: commentsTool_0226
 * Domain: Comments
 * ID: 0226
 */
exports.commentsTool_0226 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0226:', error);
    throw error;
  }
};
