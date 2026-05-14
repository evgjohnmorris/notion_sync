/**
 * Generated Tool: commentsTool_0054
 * Domain: Comments
 * ID: 0054
 */
exports.commentsTool_0054 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0054:', error);
    throw error;
  }
};
