/**
 * Generated Tool: commentsTool_0899
 * Domain: Comments
 * ID: 0899
 */
exports.commentsTool_0899 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0899:', error);
    throw error;
  }
};
