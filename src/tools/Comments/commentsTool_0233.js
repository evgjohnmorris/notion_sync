/**
 * Generated Tool: commentsTool_0233
 * Domain: Comments
 * ID: 0233
 */
exports.commentsTool_0233 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0233:', error);
    throw error;
  }
};
