/**
 * Generated Tool: commentsTool_0261
 * Domain: Comments
 * ID: 0261
 */
exports.commentsTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0261:', error);
    throw error;
  }
};
