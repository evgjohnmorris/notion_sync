/**
 * Generated Tool: commentsTool_0787
 * Domain: Comments
 * ID: 0787
 */
exports.commentsTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0787:', error);
    throw error;
  }
};
