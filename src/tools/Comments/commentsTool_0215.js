/**
 * Generated Tool: commentsTool_0215
 * Domain: Comments
 * ID: 0215
 */
exports.commentsTool_0215 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0215:', error);
    throw error;
  }
};
