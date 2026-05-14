/**
 * Generated Tool: commentsTool_0614
 * Domain: Comments
 * ID: 0614
 */
exports.commentsTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0614:', error);
    throw error;
  }
};
