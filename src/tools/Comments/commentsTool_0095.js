/**
 * Generated Tool: commentsTool_0095
 * Domain: Comments
 * ID: 0095
 */
exports.commentsTool_0095 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0095:', error);
    throw error;
  }
};
