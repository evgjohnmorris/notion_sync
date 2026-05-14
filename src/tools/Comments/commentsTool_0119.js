/**
 * Generated Tool: commentsTool_0119
 * Domain: Comments
 * ID: 0119
 */
exports.commentsTool_0119 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0119:', error);
    throw error;
  }
};
