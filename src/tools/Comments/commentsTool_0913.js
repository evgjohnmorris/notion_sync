/**
 * Generated Tool: commentsTool_0913
 * Domain: Comments
 * ID: 0913
 */
exports.commentsTool_0913 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0913:', error);
    throw error;
  }
};
