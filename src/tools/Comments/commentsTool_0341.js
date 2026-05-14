/**
 * Generated Tool: commentsTool_0341
 * Domain: Comments
 * ID: 0341
 */
exports.commentsTool_0341 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0341:', error);
    throw error;
  }
};
