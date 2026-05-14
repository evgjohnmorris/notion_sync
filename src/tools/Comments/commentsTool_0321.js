/**
 * Generated Tool: commentsTool_0321
 * Domain: Comments
 * ID: 0321
 */
exports.commentsTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0321:', error);
    throw error;
  }
};
