/**
 * Generated Tool: commentsTool_0801
 * Domain: Comments
 * ID: 0801
 */
exports.commentsTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0801:', error);
    throw error;
  }
};
