/**
 * Generated Tool: commentsTool_0604
 * Domain: Comments
 * ID: 0604
 */
exports.commentsTool_0604 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0604:', error);
    throw error;
  }
};
