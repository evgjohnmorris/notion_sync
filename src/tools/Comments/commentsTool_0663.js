/**
 * Generated Tool: commentsTool_0663
 * Domain: Comments
 * ID: 0663
 */
exports.commentsTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0663:', error);
    throw error;
  }
};
