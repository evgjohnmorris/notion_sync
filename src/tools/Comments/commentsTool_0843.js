/**
 * Generated Tool: commentsTool_0843
 * Domain: Comments
 * ID: 0843
 */
exports.commentsTool_0843 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0843:', error);
    throw error;
  }
};
