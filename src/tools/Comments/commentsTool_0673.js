/**
 * Generated Tool: commentsTool_0673
 * Domain: Comments
 * ID: 0673
 */
exports.commentsTool_0673 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0673:', error);
    throw error;
  }
};
