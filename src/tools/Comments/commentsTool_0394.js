/**
 * Generated Tool: commentsTool_0394
 * Domain: Comments
 * ID: 0394
 */
exports.commentsTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0394:', error);
    throw error;
  }
};
