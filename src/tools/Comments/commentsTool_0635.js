/**
 * Generated Tool: commentsTool_0635
 * Domain: Comments
 * ID: 0635
 */
exports.commentsTool_0635 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0635:', error);
    throw error;
  }
};
