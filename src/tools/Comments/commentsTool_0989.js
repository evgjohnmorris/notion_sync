/**
 * Generated Tool: commentsTool_0989
 * Domain: Comments
 * ID: 0989
 */
exports.commentsTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0989:', error);
    throw error;
  }
};
