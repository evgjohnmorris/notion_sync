/**
 * Generated Tool: commentsTool_0784
 * Domain: Comments
 * ID: 0784
 */
exports.commentsTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0784:', error);
    throw error;
  }
};
