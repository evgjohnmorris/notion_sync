/**
 * Generated Tool: commentsTool_0252
 * Domain: Comments
 * ID: 0252
 */
exports.commentsTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0252:', error);
    throw error;
  }
};
