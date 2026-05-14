/**
 * Generated Tool: commentsTool_0820
 * Domain: Comments
 * ID: 0820
 */
exports.commentsTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0820:', error);
    throw error;
  }
};
