/**
 * Generated Tool: commentsTool_0145
 * Domain: Comments
 * ID: 0145
 */
exports.commentsTool_0145 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0145:', error);
    throw error;
  }
};
