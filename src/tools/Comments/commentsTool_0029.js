/**
 * Generated Tool: commentsTool_0029
 * Domain: Comments
 * ID: 0029
 */
exports.commentsTool_0029 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0029:', error);
    throw error;
  }
};
