/**
 * Generated Tool: commentsTool_0778
 * Domain: Comments
 * ID: 0778
 */
exports.commentsTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0778:', error);
    throw error;
  }
};
