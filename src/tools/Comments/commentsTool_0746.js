/**
 * Generated Tool: commentsTool_0746
 * Domain: Comments
 * ID: 0746
 */
exports.commentsTool_0746 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0746:', error);
    throw error;
  }
};
