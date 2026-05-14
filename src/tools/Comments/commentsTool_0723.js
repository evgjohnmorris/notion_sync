/**
 * Generated Tool: commentsTool_0723
 * Domain: Comments
 * ID: 0723
 */
exports.commentsTool_0723 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0723:', error);
    throw error;
  }
};
