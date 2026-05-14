/**
 * Generated Tool: commentsTool_0136
 * Domain: Comments
 * ID: 0136
 */
exports.commentsTool_0136 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0136:', error);
    throw error;
  }
};
