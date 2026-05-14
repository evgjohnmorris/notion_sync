/**
 * Generated Tool: commentsTool_0639
 * Domain: Comments
 * ID: 0639
 */
exports.commentsTool_0639 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0639:', error);
    throw error;
  }
};
