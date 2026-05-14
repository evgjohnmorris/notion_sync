/**
 * Generated Tool: commentsTool_0974
 * Domain: Comments
 * ID: 0974
 */
exports.commentsTool_0974 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0974:', error);
    throw error;
  }
};
