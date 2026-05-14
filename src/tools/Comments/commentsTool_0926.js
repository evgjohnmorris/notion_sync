/**
 * Generated Tool: commentsTool_0926
 * Domain: Comments
 * ID: 0926
 */
exports.commentsTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0926:', error);
    throw error;
  }
};
