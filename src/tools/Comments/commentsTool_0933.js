/**
 * Generated Tool: commentsTool_0933
 * Domain: Comments
 * ID: 0933
 */
exports.commentsTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0933:', error);
    throw error;
  }
};
