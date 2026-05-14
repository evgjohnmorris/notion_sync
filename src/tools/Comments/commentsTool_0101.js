/**
 * Generated Tool: commentsTool_0101
 * Domain: Comments
 * ID: 0101
 */
exports.commentsTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0101:', error);
    throw error;
  }
};
