/**
 * Generated Tool: commentsTool_0452
 * Domain: Comments
 * ID: 0452
 */
exports.commentsTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0452:', error);
    throw error;
  }
};
