/**
 * Generated Tool: commentsTool_0185
 * Domain: Comments
 * ID: 0185
 */
exports.commentsTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0185:', error);
    throw error;
  }
};
