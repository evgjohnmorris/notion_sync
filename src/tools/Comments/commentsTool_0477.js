/**
 * Generated Tool: commentsTool_0477
 * Domain: Comments
 * ID: 0477
 */
exports.commentsTool_0477 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0477:', error);
    throw error;
  }
};
