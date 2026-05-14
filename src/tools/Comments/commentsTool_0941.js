/**
 * Generated Tool: commentsTool_0941
 * Domain: Comments
 * ID: 0941
 */
exports.commentsTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0941:', error);
    throw error;
  }
};
