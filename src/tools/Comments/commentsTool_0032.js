/**
 * Generated Tool: commentsTool_0032
 * Domain: Comments
 * ID: 0032
 */
exports.commentsTool_0032 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0032:', error);
    throw error;
  }
};
