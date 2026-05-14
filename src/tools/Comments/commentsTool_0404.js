/**
 * Generated Tool: commentsTool_0404
 * Domain: Comments
 * ID: 0404
 */
exports.commentsTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0404:', error);
    throw error;
  }
};
