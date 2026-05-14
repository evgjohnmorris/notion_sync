/**
 * Generated Tool: commentsTool_0827
 * Domain: Comments
 * ID: 0827
 */
exports.commentsTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0827:', error);
    throw error;
  }
};
