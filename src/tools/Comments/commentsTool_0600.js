/**
 * Generated Tool: commentsTool_0600
 * Domain: Comments
 * ID: 0600
 */
exports.commentsTool_0600 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0600:', error);
    throw error;
  }
};
