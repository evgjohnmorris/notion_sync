/**
 * Generated Tool: commentsTool_0583
 * Domain: Comments
 * ID: 0583
 */
exports.commentsTool_0583 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0583:', error);
    throw error;
  }
};
