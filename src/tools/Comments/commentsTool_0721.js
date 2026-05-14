/**
 * Generated Tool: commentsTool_0721
 * Domain: Comments
 * ID: 0721
 */
exports.commentsTool_0721 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0721:', error);
    throw error;
  }
};
