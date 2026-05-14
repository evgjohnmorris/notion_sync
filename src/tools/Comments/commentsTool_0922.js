/**
 * Generated Tool: commentsTool_0922
 * Domain: Comments
 * ID: 0922
 */
exports.commentsTool_0922 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0922:', error);
    throw error;
  }
};
