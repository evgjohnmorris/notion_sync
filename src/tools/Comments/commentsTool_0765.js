/**
 * Generated Tool: commentsTool_0765
 * Domain: Comments
 * ID: 0765
 */
exports.commentsTool_0765 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0765:', error);
    throw error;
  }
};
