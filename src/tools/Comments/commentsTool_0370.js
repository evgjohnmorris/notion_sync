/**
 * Generated Tool: commentsTool_0370
 * Domain: Comments
 * ID: 0370
 */
exports.commentsTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0370:', error);
    throw error;
  }
};
