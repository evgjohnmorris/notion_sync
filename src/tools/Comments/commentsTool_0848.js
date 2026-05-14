/**
 * Generated Tool: commentsTool_0848
 * Domain: Comments
 * ID: 0848
 */
exports.commentsTool_0848 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0848:', error);
    throw error;
  }
};
