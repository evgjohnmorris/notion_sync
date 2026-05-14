/**
 * Generated Tool: commentsTool_0090
 * Domain: Comments
 * ID: 0090
 */
exports.commentsTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0090:', error);
    throw error;
  }
};
