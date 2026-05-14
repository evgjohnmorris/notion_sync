/**
 * Generated Tool: commentsTool_0388
 * Domain: Comments
 * ID: 0388
 */
exports.commentsTool_0388 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0388:', error);
    throw error;
  }
};
