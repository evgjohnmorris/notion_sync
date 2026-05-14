/**
 * Generated Tool: commentsTool_0652
 * Domain: Comments
 * ID: 0652
 */
exports.commentsTool_0652 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0652:', error);
    throw error;
  }
};
