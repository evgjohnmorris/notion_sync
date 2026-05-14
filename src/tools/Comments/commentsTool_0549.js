/**
 * Generated Tool: commentsTool_0549
 * Domain: Comments
 * ID: 0549
 */
exports.commentsTool_0549 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0549:', error);
    throw error;
  }
};
