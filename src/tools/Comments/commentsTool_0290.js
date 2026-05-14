/**
 * Generated Tool: commentsTool_0290
 * Domain: Comments
 * ID: 0290
 */
exports.commentsTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0290:', error);
    throw error;
  }
};
