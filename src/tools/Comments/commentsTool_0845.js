/**
 * Generated Tool: commentsTool_0845
 * Domain: Comments
 * ID: 0845
 */
exports.commentsTool_0845 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0845:', error);
    throw error;
  }
};
