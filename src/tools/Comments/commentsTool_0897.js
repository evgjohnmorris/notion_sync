/**
 * Generated Tool: commentsTool_0897
 * Domain: Comments
 * ID: 0897
 */
exports.commentsTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0897:', error);
    throw error;
  }
};
