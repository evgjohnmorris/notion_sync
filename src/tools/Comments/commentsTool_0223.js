/**
 * Generated Tool: commentsTool_0223
 * Domain: Comments
 * ID: 0223
 */
exports.commentsTool_0223 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0223:', error);
    throw error;
  }
};
