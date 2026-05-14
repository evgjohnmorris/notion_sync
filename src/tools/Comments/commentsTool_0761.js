/**
 * Generated Tool: commentsTool_0761
 * Domain: Comments
 * ID: 0761
 */
exports.commentsTool_0761 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0761:', error);
    throw error;
  }
};
