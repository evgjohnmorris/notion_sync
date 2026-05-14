/**
 * Generated Tool: commentsTool_0281
 * Domain: Comments
 * ID: 0281
 */
exports.commentsTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0281:', error);
    throw error;
  }
};
