/**
 * Generated Tool: commentsTool_0269
 * Domain: Comments
 * ID: 0269
 */
exports.commentsTool_0269 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0269:', error);
    throw error;
  }
};
