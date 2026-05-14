/**
 * Generated Tool: commentsTool_0919
 * Domain: Comments
 * ID: 0919
 */
exports.commentsTool_0919 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0919:', error);
    throw error;
  }
};
