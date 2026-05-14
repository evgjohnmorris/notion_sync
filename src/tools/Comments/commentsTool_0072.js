/**
 * Generated Tool: commentsTool_0072
 * Domain: Comments
 * ID: 0072
 */
exports.commentsTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0072:', error);
    throw error;
  }
};
