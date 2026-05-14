/**
 * Generated Tool: commentsTool_0443
 * Domain: Comments
 * ID: 0443
 */
exports.commentsTool_0443 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0443:', error);
    throw error;
  }
};
