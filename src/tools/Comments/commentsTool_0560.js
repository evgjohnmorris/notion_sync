/**
 * Generated Tool: commentsTool_0560
 * Domain: Comments
 * ID: 0560
 */
exports.commentsTool_0560 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0560:', error);
    throw error;
  }
};
