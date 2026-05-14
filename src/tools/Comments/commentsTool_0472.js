/**
 * Generated Tool: commentsTool_0472
 * Domain: Comments
 * ID: 0472
 */
exports.commentsTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0472:', error);
    throw error;
  }
};
