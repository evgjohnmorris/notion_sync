/**
 * Generated Tool: commentsTool_0844
 * Domain: Comments
 * ID: 0844
 */
exports.commentsTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0844:', error);
    throw error;
  }
};
