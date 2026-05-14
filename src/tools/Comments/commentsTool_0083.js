/**
 * Generated Tool: commentsTool_0083
 * Domain: Comments
 * ID: 0083
 */
exports.commentsTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0083:', error);
    throw error;
  }
};
