/**
 * Generated Tool: commentsTool_0284
 * Domain: Comments
 * ID: 0284
 */
exports.commentsTool_0284 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0284:', error);
    throw error;
  }
};
