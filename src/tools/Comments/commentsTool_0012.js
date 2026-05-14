/**
 * Generated Tool: commentsTool_0012
 * Domain: Comments
 * ID: 0012
 */
exports.commentsTool_0012 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0012:', error);
    throw error;
  }
};
