/**
 * Generated Tool: commentsTool_0357
 * Domain: Comments
 * ID: 0357
 */
exports.commentsTool_0357 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0357:', error);
    throw error;
  }
};
