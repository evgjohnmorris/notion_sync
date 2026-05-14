/**
 * Generated Tool: commentsTool_0332
 * Domain: Comments
 * ID: 0332
 */
exports.commentsTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0332:', error);
    throw error;
  }
};
