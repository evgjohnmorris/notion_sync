/**
 * Generated Tool: commentsTool_0987
 * Domain: Comments
 * ID: 0987
 */
exports.commentsTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0987:', error);
    throw error;
  }
};
