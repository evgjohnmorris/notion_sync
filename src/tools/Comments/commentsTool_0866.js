/**
 * Generated Tool: commentsTool_0866
 * Domain: Comments
 * ID: 0866
 */
exports.commentsTool_0866 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0866:', error);
    throw error;
  }
};
