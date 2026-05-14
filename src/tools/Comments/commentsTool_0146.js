/**
 * Generated Tool: commentsTool_0146
 * Domain: Comments
 * ID: 0146
 */
exports.commentsTool_0146 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0146:', error);
    throw error;
  }
};
