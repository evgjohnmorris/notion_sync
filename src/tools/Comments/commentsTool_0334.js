/**
 * Generated Tool: commentsTool_0334
 * Domain: Comments
 * ID: 0334
 */
exports.commentsTool_0334 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0334:', error);
    throw error;
  }
};
