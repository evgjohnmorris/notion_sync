/**
 * Generated Tool: commentsTool_0465
 * Domain: Comments
 * ID: 0465
 */
exports.commentsTool_0465 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0465:', error);
    throw error;
  }
};
