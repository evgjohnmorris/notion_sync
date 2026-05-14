/**
 * Generated Tool: commentsTool_0623
 * Domain: Comments
 * ID: 0623
 */
exports.commentsTool_0623 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0623:', error);
    throw error;
  }
};
