/**
 * Generated Tool: commentsTool_0079
 * Domain: Comments
 * ID: 0079
 */
exports.commentsTool_0079 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0079:', error);
    throw error;
  }
};
