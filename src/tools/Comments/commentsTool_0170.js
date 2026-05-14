/**
 * Generated Tool: commentsTool_0170
 * Domain: Comments
 * ID: 0170
 */
exports.commentsTool_0170 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0170:', error);
    throw error;
  }
};
