/**
 * Generated Tool: commentsTool_0896
 * Domain: Comments
 * ID: 0896
 */
exports.commentsTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0896:', error);
    throw error;
  }
};
