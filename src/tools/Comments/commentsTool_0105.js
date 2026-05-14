/**
 * Generated Tool: commentsTool_0105
 * Domain: Comments
 * ID: 0105
 */
exports.commentsTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0105:', error);
    throw error;
  }
};
