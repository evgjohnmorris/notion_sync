/**
 * Generated Tool: commentsTool_0570
 * Domain: Comments
 * ID: 0570
 */
exports.commentsTool_0570 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0570:', error);
    throw error;
  }
};
