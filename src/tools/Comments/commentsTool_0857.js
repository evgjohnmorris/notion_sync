/**
 * Generated Tool: commentsTool_0857
 * Domain: Comments
 * ID: 0857
 */
exports.commentsTool_0857 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0857:', error);
    throw error;
  }
};
