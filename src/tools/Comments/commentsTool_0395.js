/**
 * Generated Tool: commentsTool_0395
 * Domain: Comments
 * ID: 0395
 */
exports.commentsTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0395:', error);
    throw error;
  }
};
