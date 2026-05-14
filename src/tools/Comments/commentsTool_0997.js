/**
 * Generated Tool: commentsTool_0997
 * Domain: Comments
 * ID: 0997
 */
exports.commentsTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0997:', error);
    throw error;
  }
};
