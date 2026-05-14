/**
 * Generated Tool: commentsTool_0949
 * Domain: Comments
 * ID: 0949
 */
exports.commentsTool_0949 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0949:', error);
    throw error;
  }
};
