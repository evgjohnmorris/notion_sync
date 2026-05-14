/**
 * Generated Tool: commentsTool_0248
 * Domain: Comments
 * ID: 0248
 */
exports.commentsTool_0248 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0248:', error);
    throw error;
  }
};
