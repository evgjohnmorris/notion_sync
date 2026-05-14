/**
 * Generated Tool: commentsTool_0087
 * Domain: Comments
 * ID: 0087
 */
exports.commentsTool_0087 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0087:', error);
    throw error;
  }
};
