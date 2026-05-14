/**
 * Generated Tool: commentsTool_0110
 * Domain: Comments
 * ID: 0110
 */
exports.commentsTool_0110 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0110:', error);
    throw error;
  }
};
