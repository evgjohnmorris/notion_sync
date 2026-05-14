/**
 * Generated Tool: commentsTool_0651
 * Domain: Comments
 * ID: 0651
 */
exports.commentsTool_0651 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0651:', error);
    throw error;
  }
};
