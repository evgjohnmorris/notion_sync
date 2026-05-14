/**
 * Generated Tool: commentsTool_0132
 * Domain: Comments
 * ID: 0132
 */
exports.commentsTool_0132 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0132:', error);
    throw error;
  }
};
