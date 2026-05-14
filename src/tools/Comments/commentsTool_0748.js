/**
 * Generated Tool: commentsTool_0748
 * Domain: Comments
 * ID: 0748
 */
exports.commentsTool_0748 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0748:', error);
    throw error;
  }
};
