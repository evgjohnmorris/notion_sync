/**
 * Generated Tool: commentsTool_0320
 * Domain: Comments
 * ID: 0320
 */
exports.commentsTool_0320 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0320:', error);
    throw error;
  }
};
