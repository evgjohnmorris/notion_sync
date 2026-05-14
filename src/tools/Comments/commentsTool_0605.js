/**
 * Generated Tool: commentsTool_0605
 * Domain: Comments
 * ID: 0605
 */
exports.commentsTool_0605 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0605:', error);
    throw error;
  }
};
