/**
 * Generated Tool: commentsTool_0903
 * Domain: Comments
 * ID: 0903
 */
exports.commentsTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0903:', error);
    throw error;
  }
};
