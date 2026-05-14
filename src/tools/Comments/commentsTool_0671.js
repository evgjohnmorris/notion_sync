/**
 * Generated Tool: commentsTool_0671
 * Domain: Comments
 * ID: 0671
 */
exports.commentsTool_0671 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0671:', error);
    throw error;
  }
};
