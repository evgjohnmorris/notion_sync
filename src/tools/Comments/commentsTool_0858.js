/**
 * Generated Tool: commentsTool_0858
 * Domain: Comments
 * ID: 0858
 */
exports.commentsTool_0858 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0858:', error);
    throw error;
  }
};
