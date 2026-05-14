/**
 * Generated Tool: commentsTool_0894
 * Domain: Comments
 * ID: 0894
 */
exports.commentsTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0894:', error);
    throw error;
  }
};
