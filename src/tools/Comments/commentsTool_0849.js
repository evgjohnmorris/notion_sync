/**
 * Generated Tool: commentsTool_0849
 * Domain: Comments
 * ID: 0849
 */
exports.commentsTool_0849 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0849:', error);
    throw error;
  }
};
