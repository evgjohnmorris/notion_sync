/**
 * Generated Tool: commentsTool_0318
 * Domain: Comments
 * ID: 0318
 */
exports.commentsTool_0318 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0318:', error);
    throw error;
  }
};
