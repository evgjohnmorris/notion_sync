/**
 * Generated Tool: commentsTool_0369
 * Domain: Comments
 * ID: 0369
 */
exports.commentsTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0369:', error);
    throw error;
  }
};
