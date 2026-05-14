/**
 * Generated Tool: commentsTool_0829
 * Domain: Comments
 * ID: 0829
 */
exports.commentsTool_0829 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0829:', error);
    throw error;
  }
};
