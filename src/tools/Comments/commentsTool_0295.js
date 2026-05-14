/**
 * Generated Tool: commentsTool_0295
 * Domain: Comments
 * ID: 0295
 */
exports.commentsTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0295:', error);
    throw error;
  }
};
