/**
 * Generated Tool: commentsTool_0282
 * Domain: Comments
 * ID: 0282
 */
exports.commentsTool_0282 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0282:', error);
    throw error;
  }
};
