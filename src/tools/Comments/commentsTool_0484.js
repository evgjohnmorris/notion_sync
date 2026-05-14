/**
 * Generated Tool: commentsTool_0484
 * Domain: Comments
 * ID: 0484
 */
exports.commentsTool_0484 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0484:', error);
    throw error;
  }
};
