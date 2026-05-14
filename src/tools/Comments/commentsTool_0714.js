/**
 * Generated Tool: commentsTool_0714
 * Domain: Comments
 * ID: 0714
 */
exports.commentsTool_0714 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0714:', error);
    throw error;
  }
};
