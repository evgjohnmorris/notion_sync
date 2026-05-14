/**
 * Generated Tool: commentsTool_0162
 * Domain: Comments
 * ID: 0162
 */
exports.commentsTool_0162 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0162:', error);
    throw error;
  }
};
