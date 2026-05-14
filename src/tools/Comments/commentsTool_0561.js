/**
 * Generated Tool: commentsTool_0561
 * Domain: Comments
 * ID: 0561
 */
exports.commentsTool_0561 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0561:', error);
    throw error;
  }
};
