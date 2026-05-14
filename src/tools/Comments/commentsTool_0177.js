/**
 * Generated Tool: commentsTool_0177
 * Domain: Comments
 * ID: 0177
 */
exports.commentsTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0177:', error);
    throw error;
  }
};
