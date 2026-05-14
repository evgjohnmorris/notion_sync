/**
 * Generated Tool: commentsTool_0929
 * Domain: Comments
 * ID: 0929
 */
exports.commentsTool_0929 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0929:', error);
    throw error;
  }
};
