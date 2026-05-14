/**
 * Generated Tool: commentsTool_0961
 * Domain: Comments
 * ID: 0961
 */
exports.commentsTool_0961 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0961:', error);
    throw error;
  }
};
