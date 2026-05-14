/**
 * Generated Tool: commentsTool_0294
 * Domain: Comments
 * ID: 0294
 */
exports.commentsTool_0294 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0294:', error);
    throw error;
  }
};
