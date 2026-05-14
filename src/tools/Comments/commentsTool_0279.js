/**
 * Generated Tool: commentsTool_0279
 * Domain: Comments
 * ID: 0279
 */
exports.commentsTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0279:', error);
    throw error;
  }
};
