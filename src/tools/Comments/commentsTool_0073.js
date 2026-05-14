/**
 * Generated Tool: commentsTool_0073
 * Domain: Comments
 * ID: 0073
 */
exports.commentsTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0073:', error);
    throw error;
  }
};
