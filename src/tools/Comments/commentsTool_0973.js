/**
 * Generated Tool: commentsTool_0973
 * Domain: Comments
 * ID: 0973
 */
exports.commentsTool_0973 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0973:', error);
    throw error;
  }
};
