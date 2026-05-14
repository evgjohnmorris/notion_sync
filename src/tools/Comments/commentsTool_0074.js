/**
 * Generated Tool: commentsTool_0074
 * Domain: Comments
 * ID: 0074
 */
exports.commentsTool_0074 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0074:', error);
    throw error;
  }
};
