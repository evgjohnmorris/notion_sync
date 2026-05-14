/**
 * Generated Tool: commentsTool_0058
 * Domain: Comments
 * ID: 0058
 */
exports.commentsTool_0058 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0058:', error);
    throw error;
  }
};
