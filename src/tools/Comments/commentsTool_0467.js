/**
 * Generated Tool: commentsTool_0467
 * Domain: Comments
 * ID: 0467
 */
exports.commentsTool_0467 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0467:', error);
    throw error;
  }
};
