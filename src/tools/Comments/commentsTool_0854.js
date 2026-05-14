/**
 * Generated Tool: commentsTool_0854
 * Domain: Comments
 * ID: 0854
 */
exports.commentsTool_0854 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0854:', error);
    throw error;
  }
};
