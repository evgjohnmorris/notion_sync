/**
 * Generated Tool: commentsTool_0589
 * Domain: Comments
 * ID: 0589
 */
exports.commentsTool_0589 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0589:', error);
    throw error;
  }
};
