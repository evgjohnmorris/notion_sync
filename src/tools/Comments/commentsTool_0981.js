/**
 * Generated Tool: commentsTool_0981
 * Domain: Comments
 * ID: 0981
 */
exports.commentsTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0981:', error);
    throw error;
  }
};
