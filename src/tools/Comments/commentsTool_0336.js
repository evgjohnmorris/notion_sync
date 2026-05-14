/**
 * Generated Tool: commentsTool_0336
 * Domain: Comments
 * ID: 0336
 */
exports.commentsTool_0336 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0336:', error);
    throw error;
  }
};
