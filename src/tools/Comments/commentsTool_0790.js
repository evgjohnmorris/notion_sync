/**
 * Generated Tool: commentsTool_0790
 * Domain: Comments
 * ID: 0790
 */
exports.commentsTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0790:', error);
    throw error;
  }
};
