/**
 * Generated Tool: commentsTool_0176
 * Domain: Comments
 * ID: 0176
 */
exports.commentsTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0176:', error);
    throw error;
  }
};
