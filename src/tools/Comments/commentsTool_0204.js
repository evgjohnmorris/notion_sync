/**
 * Generated Tool: commentsTool_0204
 * Domain: Comments
 * ID: 0204
 */
exports.commentsTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0204:', error);
    throw error;
  }
};
