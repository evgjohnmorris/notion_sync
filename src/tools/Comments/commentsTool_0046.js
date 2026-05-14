/**
 * Generated Tool: commentsTool_0046
 * Domain: Comments
 * ID: 0046
 */
exports.commentsTool_0046 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0046:', error);
    throw error;
  }
};
