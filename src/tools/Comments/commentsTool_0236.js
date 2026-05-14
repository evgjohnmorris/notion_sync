/**
 * Generated Tool: commentsTool_0236
 * Domain: Comments
 * ID: 0236
 */
exports.commentsTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0236:', error);
    throw error;
  }
};
