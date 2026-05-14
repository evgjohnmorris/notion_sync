/**
 * Generated Tool: commentsTool_0273
 * Domain: Comments
 * ID: 0273
 */
exports.commentsTool_0273 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0273:', error);
    throw error;
  }
};
