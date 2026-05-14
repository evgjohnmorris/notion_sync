/**
 * Generated Tool: commentsTool_0360
 * Domain: Comments
 * ID: 0360
 */
exports.commentsTool_0360 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0360:', error);
    throw error;
  }
};
