/**
 * Generated Tool: commentsTool_0131
 * Domain: Comments
 * ID: 0131
 */
exports.commentsTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0131:', error);
    throw error;
  }
};
