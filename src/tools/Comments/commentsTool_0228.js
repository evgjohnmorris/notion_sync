/**
 * Generated Tool: commentsTool_0228
 * Domain: Comments
 * ID: 0228
 */
exports.commentsTool_0228 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0228:', error);
    throw error;
  }
};
