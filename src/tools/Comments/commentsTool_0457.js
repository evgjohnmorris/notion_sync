/**
 * Generated Tool: commentsTool_0457
 * Domain: Comments
 * ID: 0457
 */
exports.commentsTool_0457 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0457:', error);
    throw error;
  }
};
