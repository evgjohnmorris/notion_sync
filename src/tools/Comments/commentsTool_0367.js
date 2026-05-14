/**
 * Generated Tool: commentsTool_0367
 * Domain: Comments
 * ID: 0367
 */
exports.commentsTool_0367 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0367:', error);
    throw error;
  }
};
