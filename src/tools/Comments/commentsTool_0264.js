/**
 * Generated Tool: commentsTool_0264
 * Domain: Comments
 * ID: 0264
 */
exports.commentsTool_0264 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0264:', error);
    throw error;
  }
};
