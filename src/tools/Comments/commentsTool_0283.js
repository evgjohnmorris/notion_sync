/**
 * Generated Tool: commentsTool_0283
 * Domain: Comments
 * ID: 0283
 */
exports.commentsTool_0283 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0283:', error);
    throw error;
  }
};
