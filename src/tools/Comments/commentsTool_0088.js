/**
 * Generated Tool: commentsTool_0088
 * Domain: Comments
 * ID: 0088
 */
exports.commentsTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0088:', error);
    throw error;
  }
};
