/**
 * Generated Tool: commentsTool_0590
 * Domain: Comments
 * ID: 0590
 */
exports.commentsTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0590:', error);
    throw error;
  }
};
