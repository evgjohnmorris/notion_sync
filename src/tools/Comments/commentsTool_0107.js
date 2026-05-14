/**
 * Generated Tool: commentsTool_0107
 * Domain: Comments
 * ID: 0107
 */
exports.commentsTool_0107 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0107:', error);
    throw error;
  }
};
