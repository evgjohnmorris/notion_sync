/**
 * Generated Tool: commentsTool_0776
 * Domain: Comments
 * ID: 0776
 */
exports.commentsTool_0776 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0776:', error);
    throw error;
  }
};
