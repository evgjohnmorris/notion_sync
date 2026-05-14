/**
 * Generated Tool: commentsTool_0311
 * Domain: Comments
 * ID: 0311
 */
exports.commentsTool_0311 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0311:', error);
    throw error;
  }
};
