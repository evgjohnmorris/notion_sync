/**
 * Generated Tool: commentsTool_0246
 * Domain: Comments
 * ID: 0246
 */
exports.commentsTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0246:', error);
    throw error;
  }
};
