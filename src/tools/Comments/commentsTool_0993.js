/**
 * Generated Tool: commentsTool_0993
 * Domain: Comments
 * ID: 0993
 */
exports.commentsTool_0993 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0993:', error);
    throw error;
  }
};
