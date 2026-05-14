/**
 * Generated Tool: commentsTool_0641
 * Domain: Comments
 * ID: 0641
 */
exports.commentsTool_0641 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0641:', error);
    throw error;
  }
};
