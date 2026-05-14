/**
 * Generated Tool: commentsTool_0791
 * Domain: Comments
 * ID: 0791
 */
exports.commentsTool_0791 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0791:', error);
    throw error;
  }
};
