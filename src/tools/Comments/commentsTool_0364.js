/**
 * Generated Tool: commentsTool_0364
 * Domain: Comments
 * ID: 0364
 */
exports.commentsTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0364:', error);
    throw error;
  }
};
