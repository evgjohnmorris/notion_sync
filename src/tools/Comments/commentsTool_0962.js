/**
 * Generated Tool: commentsTool_0962
 * Domain: Comments
 * ID: 0962
 */
exports.commentsTool_0962 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0962:', error);
    throw error;
  }
};
