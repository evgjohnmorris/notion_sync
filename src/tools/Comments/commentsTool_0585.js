/**
 * Generated Tool: commentsTool_0585
 * Domain: Comments
 * ID: 0585
 */
exports.commentsTool_0585 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0585:', error);
    throw error;
  }
};
