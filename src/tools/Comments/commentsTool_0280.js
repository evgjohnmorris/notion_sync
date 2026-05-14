/**
 * Generated Tool: commentsTool_0280
 * Domain: Comments
 * ID: 0280
 */
exports.commentsTool_0280 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0280:', error);
    throw error;
  }
};
