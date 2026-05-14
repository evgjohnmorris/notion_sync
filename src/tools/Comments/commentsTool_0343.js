/**
 * Generated Tool: commentsTool_0343
 * Domain: Comments
 * ID: 0343
 */
exports.commentsTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0343:', error);
    throw error;
  }
};
