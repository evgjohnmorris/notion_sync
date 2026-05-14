/**
 * Generated Tool: commentsTool_0030
 * Domain: Comments
 * ID: 0030
 */
exports.commentsTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0030:', error);
    throw error;
  }
};
