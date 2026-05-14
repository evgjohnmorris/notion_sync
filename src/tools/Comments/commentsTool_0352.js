/**
 * Generated Tool: commentsTool_0352
 * Domain: Comments
 * ID: 0352
 */
exports.commentsTool_0352 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0352:', error);
    throw error;
  }
};
