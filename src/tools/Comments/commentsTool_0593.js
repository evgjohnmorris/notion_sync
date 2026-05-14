/**
 * Generated Tool: commentsTool_0593
 * Domain: Comments
 * ID: 0593
 */
exports.commentsTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0593:', error);
    throw error;
  }
};
