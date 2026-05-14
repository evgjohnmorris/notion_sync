/**
 * Generated Tool: commentsTool_0189
 * Domain: Comments
 * ID: 0189
 */
exports.commentsTool_0189 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0189:', error);
    throw error;
  }
};
