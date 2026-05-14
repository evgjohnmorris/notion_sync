/**
 * Generated Tool: commentsTool_0048
 * Domain: Comments
 * ID: 0048
 */
exports.commentsTool_0048 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.comments.create(params);
    return response;
  } catch (error) {
    console.error('Error in commentsTool_0048:', error);
    throw error;
  }
};
