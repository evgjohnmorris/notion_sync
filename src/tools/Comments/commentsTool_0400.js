/**
 * Generated Tool: commentsTool_0400
 * Domain: Comments
 * ID: 0400
 */
exports.commentsTool_0400 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0400:', error);
    throw error;
  }
};
