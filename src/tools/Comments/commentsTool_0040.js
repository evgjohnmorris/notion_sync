/**
 * Generated Tool: commentsTool_0040
 * Domain: Comments
 * ID: 0040
 */
exports.commentsTool_0040 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0040:', error);
    throw error;
  }
};
