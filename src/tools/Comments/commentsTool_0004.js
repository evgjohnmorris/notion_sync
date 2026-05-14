/**
 * Generated Tool: commentsTool_0004
 * Domain: Comments
 * ID: 0004
 */
exports.commentsTool_0004 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0004:', error);
    throw error;
  }
};
