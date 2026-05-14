/**
 * Generated Tool: commentsTool_0520
 * Domain: Comments
 * ID: 0520
 */
exports.commentsTool_0520 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0520:', error);
    throw error;
  }
};
