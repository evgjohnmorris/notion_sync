/**
 * Generated Tool: commentsTool_0861
 * Domain: Comments
 * ID: 0861
 */
exports.commentsTool_0861 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0861:', error);
    throw error;
  }
};
