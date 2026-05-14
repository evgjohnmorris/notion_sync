/**
 * Generated Tool: commentsTool_0345
 * Domain: Comments
 * ID: 0345
 */
exports.commentsTool_0345 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0345:', error);
    throw error;
  }
};
