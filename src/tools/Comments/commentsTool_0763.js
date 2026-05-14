/**
 * Generated Tool: commentsTool_0763
 * Domain: Comments
 * ID: 0763
 */
exports.commentsTool_0763 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0763:', error);
    throw error;
  }
};
