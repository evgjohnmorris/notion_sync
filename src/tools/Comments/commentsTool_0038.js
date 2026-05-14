/**
 * Generated Tool: commentsTool_0038
 * Domain: Comments
 * ID: 0038
 */
exports.commentsTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0038:', error);
    throw error;
  }
};
