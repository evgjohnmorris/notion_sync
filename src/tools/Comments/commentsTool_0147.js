/**
 * Generated Tool: commentsTool_0147
 * Domain: Comments
 * ID: 0147
 */
exports.commentsTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0147:', error);
    throw error;
  }
};
