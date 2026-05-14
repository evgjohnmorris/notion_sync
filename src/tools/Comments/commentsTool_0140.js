/**
 * Generated Tool: commentsTool_0140
 * Domain: Comments
 * ID: 0140
 */
exports.commentsTool_0140 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0140:', error);
    throw error;
  }
};
