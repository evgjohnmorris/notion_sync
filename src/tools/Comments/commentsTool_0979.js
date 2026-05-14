/**
 * Generated Tool: commentsTool_0979
 * Domain: Comments
 * ID: 0979
 */
exports.commentsTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0979:', error);
    throw error;
  }
};
