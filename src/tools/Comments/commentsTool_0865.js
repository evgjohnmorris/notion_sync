/**
 * Generated Tool: commentsTool_0865
 * Domain: Comments
 * ID: 0865
 */
exports.commentsTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0865:', error);
    throw error;
  }
};
