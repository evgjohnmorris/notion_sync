/**
 * Generated Tool: commentsTool_0835
 * Domain: Comments
 * ID: 0835
 */
exports.commentsTool_0835 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0835:', error);
    throw error;
  }
};
