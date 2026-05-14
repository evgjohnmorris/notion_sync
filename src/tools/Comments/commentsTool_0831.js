/**
 * Generated Tool: commentsTool_0831
 * Domain: Comments
 * ID: 0831
 */
exports.commentsTool_0831 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0831:', error);
    throw error;
  }
};
