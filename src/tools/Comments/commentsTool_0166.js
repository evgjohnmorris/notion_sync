/**
 * Generated Tool: commentsTool_0166
 * Domain: Comments
 * ID: 0166
 */
exports.commentsTool_0166 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0166:', error);
    throw error;
  }
};
