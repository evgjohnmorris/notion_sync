/**
 * Generated Tool: commentsTool_0514
 * Domain: Comments
 * ID: 0514
 */
exports.commentsTool_0514 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0514:', error);
    throw error;
  }
};
