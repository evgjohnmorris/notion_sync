/**
 * Generated Tool: commentsTool_0154
 * Domain: Comments
 * ID: 0154
 */
exports.commentsTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0154:', error);
    throw error;
  }
};
