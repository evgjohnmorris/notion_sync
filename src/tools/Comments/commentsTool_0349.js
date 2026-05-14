/**
 * Generated Tool: commentsTool_0349
 * Domain: Comments
 * ID: 0349
 */
exports.commentsTool_0349 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0349:', error);
    throw error;
  }
};
