/**
 * Generated Tool: commentsTool_0479
 * Domain: Comments
 * ID: 0479
 */
exports.commentsTool_0479 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0479:', error);
    throw error;
  }
};
