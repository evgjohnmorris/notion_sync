/**
 * Generated Tool: commentsTool_0127
 * Domain: Comments
 * ID: 0127
 */
exports.commentsTool_0127 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0127:', error);
    throw error;
  }
};
