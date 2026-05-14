/**
 * Generated Tool: commentsTool_0863
 * Domain: Comments
 * ID: 0863
 */
exports.commentsTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0863:', error);
    throw error;
  }
};
