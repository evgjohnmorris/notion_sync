/**
 * Generated Tool: commentsTool_0431
 * Domain: Comments
 * ID: 0431
 */
exports.commentsTool_0431 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0431:', error);
    throw error;
  }
};
