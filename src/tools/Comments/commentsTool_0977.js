/**
 * Generated Tool: commentsTool_0977
 * Domain: Comments
 * ID: 0977
 */
exports.commentsTool_0977 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0977:', error);
    throw error;
  }
};
