/**
 * Generated Tool: commentsTool_0051
 * Domain: Comments
 * ID: 0051
 */
exports.commentsTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0051:', error);
    throw error;
  }
};
