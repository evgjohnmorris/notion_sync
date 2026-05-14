/**
 * Generated Tool: commentsTool_0595
 * Domain: Comments
 * ID: 0595
 */
exports.commentsTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0595:', error);
    throw error;
  }
};
