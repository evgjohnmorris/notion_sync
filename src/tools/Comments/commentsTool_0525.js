/**
 * Generated Tool: commentsTool_0525
 * Domain: Comments
 * ID: 0525
 */
exports.commentsTool_0525 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0525:', error);
    throw error;
  }
};
