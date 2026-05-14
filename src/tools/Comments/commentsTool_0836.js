/**
 * Generated Tool: commentsTool_0836
 * Domain: Comments
 * ID: 0836
 */
exports.commentsTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0836:', error);
    throw error;
  }
};
