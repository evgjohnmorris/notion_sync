/**
 * Generated Tool: commentsTool_0647
 * Domain: Comments
 * ID: 0647
 */
exports.commentsTool_0647 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0647:', error);
    throw error;
  }
};
