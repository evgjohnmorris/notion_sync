/**
 * Generated Tool: commentsTool_0828
 * Domain: Comments
 * ID: 0828
 */
exports.commentsTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0828:', error);
    throw error;
  }
};
