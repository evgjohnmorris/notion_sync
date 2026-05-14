/**
 * Generated Tool: commentsTool_0834
 * Domain: Comments
 * ID: 0834
 */
exports.commentsTool_0834 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0834:', error);
    throw error;
  }
};
