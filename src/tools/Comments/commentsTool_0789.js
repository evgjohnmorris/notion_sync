/**
 * Generated Tool: commentsTool_0789
 * Domain: Comments
 * ID: 0789
 */
exports.commentsTool_0789 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0789:', error);
    throw error;
  }
};
