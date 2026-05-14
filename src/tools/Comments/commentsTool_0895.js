/**
 * Generated Tool: commentsTool_0895
 * Domain: Comments
 * ID: 0895
 */
exports.commentsTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0895:', error);
    throw error;
  }
};
