/**
 * Generated Tool: commentsTool_0120
 * Domain: Comments
 * ID: 0120
 */
exports.commentsTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0120:', error);
    throw error;
  }
};
