/**
 * Generated Tool: commentsTool_0902
 * Domain: Comments
 * ID: 0902
 */
exports.commentsTool_0902 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0902:', error);
    throw error;
  }
};
