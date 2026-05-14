/**
 * Generated Tool: commentsTool_0918
 * Domain: Comments
 * ID: 0918
 */
exports.commentsTool_0918 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0918:', error);
    throw error;
  }
};
