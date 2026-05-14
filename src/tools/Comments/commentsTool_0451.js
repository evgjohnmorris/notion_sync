/**
 * Generated Tool: commentsTool_0451
 * Domain: Comments
 * ID: 0451
 */
exports.commentsTool_0451 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0451:', error);
    throw error;
  }
};
