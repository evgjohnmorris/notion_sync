/**
 * Generated Tool: commentsTool_0526
 * Domain: Comments
 * ID: 0526
 */
exports.commentsTool_0526 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0526:', error);
    throw error;
  }
};
