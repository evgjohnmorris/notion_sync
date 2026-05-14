/**
 * Generated Tool: commentsTool_0509
 * Domain: Comments
 * ID: 0509
 */
exports.commentsTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0509:', error);
    throw error;
  }
};
