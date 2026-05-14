/**
 * Generated Tool: commentsTool_0303
 * Domain: Comments
 * ID: 0303
 */
exports.commentsTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0303:', error);
    throw error;
  }
};
