/**
 * Generated Tool: commentsTool_0389
 * Domain: Comments
 * ID: 0389
 */
exports.commentsTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0389:', error);
    throw error;
  }
};
