/**
 * Generated Tool: commentsTool_0002
 * Domain: Comments
 * ID: 0002
 */
exports.commentsTool_0002 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0002:', error);
    throw error;
  }
};
