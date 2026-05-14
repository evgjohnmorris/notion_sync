/**
 * Generated Tool: commentsTool_0522
 * Domain: Comments
 * ID: 0522
 */
exports.commentsTool_0522 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0522:', error);
    throw error;
  }
};
