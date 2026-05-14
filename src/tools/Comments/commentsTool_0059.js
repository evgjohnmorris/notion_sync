/**
 * Generated Tool: commentsTool_0059
 * Domain: Comments
 * ID: 0059
 */
exports.commentsTool_0059 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0059:', error);
    throw error;
  }
};
