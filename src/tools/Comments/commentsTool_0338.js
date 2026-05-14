/**
 * Generated Tool: commentsTool_0338
 * Domain: Comments
 * ID: 0338
 */
exports.commentsTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0338:', error);
    throw error;
  }
};
