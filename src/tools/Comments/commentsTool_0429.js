/**
 * Generated Tool: commentsTool_0429
 * Domain: Comments
 * ID: 0429
 */
exports.commentsTool_0429 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0429:', error);
    throw error;
  }
};
