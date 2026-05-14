/**
 * Generated Tool: commentsTool_0876
 * Domain: Comments
 * ID: 0876
 */
exports.commentsTool_0876 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0876:', error);
    throw error;
  }
};
