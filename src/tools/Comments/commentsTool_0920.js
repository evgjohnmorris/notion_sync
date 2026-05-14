/**
 * Generated Tool: commentsTool_0920
 * Domain: Comments
 * ID: 0920
 */
exports.commentsTool_0920 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0920:', error);
    throw error;
  }
};
