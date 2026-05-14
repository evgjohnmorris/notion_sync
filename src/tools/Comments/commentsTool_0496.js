/**
 * Generated Tool: commentsTool_0496
 * Domain: Comments
 * ID: 0496
 */
exports.commentsTool_0496 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0496:', error);
    throw error;
  }
};
