/**
 * Generated Tool: commentsTool_0425
 * Domain: Comments
 * ID: 0425
 */
exports.commentsTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0425:', error);
    throw error;
  }
};
