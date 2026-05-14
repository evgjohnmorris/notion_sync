/**
 * Generated Tool: commentsTool_0733
 * Domain: Comments
 * ID: 0733
 */
exports.commentsTool_0733 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0733:', error);
    throw error;
  }
};
