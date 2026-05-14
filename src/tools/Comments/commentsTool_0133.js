/**
 * Generated Tool: commentsTool_0133
 * Domain: Comments
 * ID: 0133
 */
exports.commentsTool_0133 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0133:', error);
    throw error;
  }
};
