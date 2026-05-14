/**
 * Generated Tool: commentsTool_0661
 * Domain: Comments
 * ID: 0661
 */
exports.commentsTool_0661 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0661:', error);
    throw error;
  }
};
