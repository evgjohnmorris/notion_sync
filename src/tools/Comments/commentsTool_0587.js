/**
 * Generated Tool: commentsTool_0587
 * Domain: Comments
 * ID: 0587
 */
exports.commentsTool_0587 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0587:', error);
    throw error;
  }
};
