/**
 * Generated Tool: commentsTool_0241
 * Domain: Comments
 * ID: 0241
 */
exports.commentsTool_0241 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0241:', error);
    throw error;
  }
};
