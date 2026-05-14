/**
 * Generated Tool: commentsTool_0414
 * Domain: Comments
 * ID: 0414
 */
exports.commentsTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0414:', error);
    throw error;
  }
};
