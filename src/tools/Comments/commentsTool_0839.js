/**
 * Generated Tool: commentsTool_0839
 * Domain: Comments
 * ID: 0839
 */
exports.commentsTool_0839 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0839:', error);
    throw error;
  }
};
