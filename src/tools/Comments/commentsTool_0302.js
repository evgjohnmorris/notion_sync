/**
 * Generated Tool: commentsTool_0302
 * Domain: Comments
 * ID: 0302
 */
exports.commentsTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0302:', error);
    throw error;
  }
};
