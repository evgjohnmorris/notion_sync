/**
 * Generated Tool: commentsTool_0837
 * Domain: Comments
 * ID: 0837
 */
exports.commentsTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0837:', error);
    throw error;
  }
};
