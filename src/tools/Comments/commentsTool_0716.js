/**
 * Generated Tool: commentsTool_0716
 * Domain: Comments
 * ID: 0716
 */
exports.commentsTool_0716 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0716:', error);
    throw error;
  }
};
