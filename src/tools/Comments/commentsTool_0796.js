/**
 * Generated Tool: commentsTool_0796
 * Domain: Comments
 * ID: 0796
 */
exports.commentsTool_0796 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0796:', error);
    throw error;
  }
};
