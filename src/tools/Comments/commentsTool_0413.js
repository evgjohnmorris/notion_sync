/**
 * Generated Tool: commentsTool_0413
 * Domain: Comments
 * ID: 0413
 */
exports.commentsTool_0413 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0413:', error);
    throw error;
  }
};
