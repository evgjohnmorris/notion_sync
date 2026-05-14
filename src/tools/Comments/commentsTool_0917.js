/**
 * Generated Tool: commentsTool_0917
 * Domain: Comments
 * ID: 0917
 */
exports.commentsTool_0917 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0917:', error);
    throw error;
  }
};
