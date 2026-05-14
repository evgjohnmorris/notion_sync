/**
 * Generated Tool: commentsTool_0460
 * Domain: Comments
 * ID: 0460
 */
exports.commentsTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0460:', error);
    throw error;
  }
};
