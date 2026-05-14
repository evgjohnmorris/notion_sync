/**
 * Generated Tool: commentsTool_0089
 * Domain: Comments
 * ID: 0089
 */
exports.commentsTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0089:', error);
    throw error;
  }
};
