/**
 * Generated Tool: commentsTool_0541
 * Domain: Comments
 * ID: 0541
 */
exports.commentsTool_0541 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0541:', error);
    throw error;
  }
};
