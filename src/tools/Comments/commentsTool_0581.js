/**
 * Generated Tool: commentsTool_0581
 * Domain: Comments
 * ID: 0581
 */
exports.commentsTool_0581 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0581:', error);
    throw error;
  }
};
