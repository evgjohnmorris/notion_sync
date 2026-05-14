/**
 * Generated Tool: commentsTool_0947
 * Domain: Comments
 * ID: 0947
 */
exports.commentsTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0947:', error);
    throw error;
  }
};
