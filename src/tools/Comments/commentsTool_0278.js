/**
 * Generated Tool: commentsTool_0278
 * Domain: Comments
 * ID: 0278
 */
exports.commentsTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0278:', error);
    throw error;
  }
};
