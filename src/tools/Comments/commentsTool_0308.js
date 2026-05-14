/**
 * Generated Tool: commentsTool_0308
 * Domain: Comments
 * ID: 0308
 */
exports.commentsTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0308:', error);
    throw error;
  }
};
