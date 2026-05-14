/**
 * Generated Tool: commentsTool_0830
 * Domain: Comments
 * ID: 0830
 */
exports.commentsTool_0830 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0830:', error);
    throw error;
  }
};
