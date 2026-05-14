/**
 * Generated Tool: commentsTool_0943
 * Domain: Comments
 * ID: 0943
 */
exports.commentsTool_0943 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0943:', error);
    throw error;
  }
};
