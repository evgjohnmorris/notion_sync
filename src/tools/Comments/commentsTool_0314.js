/**
 * Generated Tool: commentsTool_0314
 * Domain: Comments
 * ID: 0314
 */
exports.commentsTool_0314 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0314:', error);
    throw error;
  }
};
