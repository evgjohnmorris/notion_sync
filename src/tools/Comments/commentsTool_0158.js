/**
 * Generated Tool: commentsTool_0158
 * Domain: Comments
 * ID: 0158
 */
exports.commentsTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0158:', error);
    throw error;
  }
};
