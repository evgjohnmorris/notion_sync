/**
 * Generated Tool: commentsTool_0202
 * Domain: Comments
 * ID: 0202
 */
exports.commentsTool_0202 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0202:', error);
    throw error;
  }
};
