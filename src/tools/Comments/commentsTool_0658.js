/**
 * Generated Tool: commentsTool_0658
 * Domain: Comments
 * ID: 0658
 */
exports.commentsTool_0658 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0658:', error);
    throw error;
  }
};
