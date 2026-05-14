/**
 * Generated Tool: commentsTool_0744
 * Domain: Comments
 * ID: 0744
 */
exports.commentsTool_0744 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0744:', error);
    throw error;
  }
};
