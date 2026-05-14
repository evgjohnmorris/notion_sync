/**
 * Generated Tool: commentsTool_0473
 * Domain: Comments
 * ID: 0473
 */
exports.commentsTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0473:', error);
    throw error;
  }
};
