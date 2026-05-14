/**
 * Generated Tool: commentsTool_0700
 * Domain: Comments
 * ID: 0700
 */
exports.commentsTool_0700 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0700:', error);
    throw error;
  }
};
