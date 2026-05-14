/**
 * Generated Tool: commentsTool_0762
 * Domain: Comments
 * ID: 0762
 */
exports.commentsTool_0762 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0762:', error);
    throw error;
  }
};
