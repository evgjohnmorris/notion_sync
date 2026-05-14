/**
 * Generated Tool: commentsTool_0565
 * Domain: Comments
 * ID: 0565
 */
exports.commentsTool_0565 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0565:', error);
    throw error;
  }
};
