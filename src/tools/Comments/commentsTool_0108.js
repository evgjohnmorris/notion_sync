/**
 * Generated Tool: commentsTool_0108
 * Domain: Comments
 * ID: 0108
 */
exports.commentsTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0108:', error);
    throw error;
  }
};
