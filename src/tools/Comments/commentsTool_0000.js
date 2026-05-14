/**
 * Generated Tool: commentsTool_0000
 * Domain: Comments
 * ID: 0000
 */
exports.commentsTool_0000 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0000:', error);
    throw error;
  }
};
