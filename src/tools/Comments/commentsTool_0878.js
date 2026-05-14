/**
 * Generated Tool: commentsTool_0878
 * Domain: Comments
 * ID: 0878
 */
exports.commentsTool_0878 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0878:', error);
    throw error;
  }
};
