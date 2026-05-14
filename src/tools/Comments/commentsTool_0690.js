/**
 * Generated Tool: commentsTool_0690
 * Domain: Comments
 * ID: 0690
 */
exports.commentsTool_0690 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0690:', error);
    throw error;
  }
};
