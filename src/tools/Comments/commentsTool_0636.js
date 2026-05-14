/**
 * Generated Tool: commentsTool_0636
 * Domain: Comments
 * ID: 0636
 */
exports.commentsTool_0636 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0636:', error);
    throw error;
  }
};
